import { z } from "zod";

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const DELIVERY_ERROR =
  "We could not deliver your message. Please try again or use the contact details shown on this page.";

const schema = z.object({
  fullName: z.string().trim().min(2).max(100),
  businessName: z.string().trim().min(2).max(150),
  jobTitle: z.string().trim().max(100).optional().default(""),
  email: z.string().trim().email().max(180),
  phone: z.string().trim().max(40).optional().default(""),
  industry: z.string().trim().min(2).max(80),
  companySize: z.string().trim().max(30).optional().default(""),
  primaryGoal: z.string().trim().min(2).max(120),
  services: z.union([
    z.string().trim().min(1).max(80),
    z.array(z.string().trim().min(1).max(80)).max(10),
  ]).optional(),
  budget: z.string().trim().max(80).optional().default(""),
  message: z.string().trim().min(20).max(4000),
  contactMethod: z.enum(["Email", "Phone", "WhatsApp"]).default("Email"),
  consent: z.union([z.literal("on"), z.literal("true"), z.literal(true)]),
  companyFax: z.string().max(0).optional().default(""),
});

type Attempt = { count: number; reset: number };
const attempts = new Map<string, Attempt>();

function json(body: Record<string, unknown>, status = 200) {
  return Response.json(body, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

function requestIp(request: Request) {
  return request.headers.get("x-vercel-forwarded-for")?.split(",")[0]?.trim()
    ?? request.headers.get("cf-connecting-ip")
    ?? request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    ?? "unknown";
}

function isAllowedOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return true;

  const requestUrl = new URL(request.url);
  const forwardedHost = request.headers.get("x-forwarded-host")
    ?? request.headers.get("host")
    ?? requestUrl.host;
  const forwardedProtocol = request.headers.get("x-forwarded-proto")
    ?? requestUrl.protocol.replace(":", "");

  return origin === requestUrl.origin || origin === `${forwardedProtocol}://${forwardedHost}`;
}

function formatEnquiry(enquiry: z.infer<typeof schema>) {
  const services = Array.isArray(enquiry.services)
    ? enquiry.services.join(", ")
    : enquiry.services || "Not selected";

  return [
    "A new banking enquiry was accepted from the Manjushree Finance website.",
    "",
    `Full name: ${enquiry.fullName}`,
    `Account holder or organization: ${enquiry.businessName}`,
    `Account number: ${enquiry.jobTitle || "Not provided"}`,
    `Email: ${enquiry.email}`,
    `Phone: ${enquiry.phone || "Not provided"}`,
    `Customer type: ${enquiry.industry}`,
    `Preferred service channel: ${enquiry.companySize || "Not selected"}`,
    `Primary enquiry: ${enquiry.primaryGoal}`,
    `Products or services: ${services}`,
    `Preferred branch or location: ${enquiry.budget || "Not provided"}`,
    `Preferred contact method: ${enquiry.contactMethod}`,
    "",
    "Message:",
    enquiry.message,
    "",
    "Security reminder: Never request a password, PIN, OTP, or complete card details by email.",
  ].join("\n");
}

export async function POST(request: Request) {
  const requestId = crypto.randomUUID();

  if (!isAllowedOrigin(request)) {
    console.warn("[contact] blocked cross-origin submission", { requestId });
    return json({ message: "Invalid request.", reference: requestId }, 403);
  }

  const contentLength = Number(request.headers.get("content-length") || "0");
  if (Number.isFinite(contentLength) && contentLength > 32_000) {
    return json({ message: "The enquiry is too large.", reference: requestId }, 413);
  }

  const ip = requestIp(request);
  const now = Date.now();
  const record = attempts.get(ip);

  if (record && record.reset > now && record.count >= 5) {
    console.warn("[contact] rate limit reached", { requestId });
    return json({ message: "Too many enquiries. Please try again later.", reference: requestId }, 429);
  }

  attempts.set(ip, record && record.reset > now
    ? { ...record, count: record.count + 1 }
    : { count: 1, reset: now + 3_600_000 });

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return json({ message: "Invalid request.", reference: requestId }, 400);
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return json({
      message: "Please complete all required fields with valid information.",
      reference: requestId,
    }, 400);
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.CONTACT_FROM_EMAIL?.trim();
  const to = process.env.CONTACT_TO_EMAIL?.trim();

  if (!apiKey || !from || !to) {
    console.error("[contact] email delivery is not configured", {
      requestId,
      missing: [
        !apiKey && "RESEND_API_KEY",
        !from && "CONTACT_FROM_EMAIL",
        !to && "CONTACT_TO_EMAIL",
      ].filter(Boolean),
    });
    return json({ message: DELIVERY_ERROR, reference: requestId }, 503);
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10_000);

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": `contact-${requestId}`,
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: parsed.data.email,
        subject: "New Manjushree Finance website enquiry",
        text: formatEnquiry(parsed.data),
        tags: [{ name: "source", value: "website_contact" }],
      }),
      signal: controller.signal,
    });

    const result = await response.json().catch(() => null) as {
      id?: string;
      name?: string;
    } | null;

    if (!response.ok || !result?.id) {
      console.error("[contact] provider rejected enquiry", {
        requestId,
        provider: "resend",
        status: response.status,
        code: result?.name || "unknown",
      });
      return json({ message: DELIVERY_ERROR, reference: requestId }, 502);
    }

    console.info("[contact] provider accepted enquiry", {
      requestId,
      provider: "resend",
      providerMessageId: result.id,
    });

    return json({
      accepted: true,
      message: "Thank you. We have received your banking enquiry and will contact you shortly.",
      reference: requestId,
    }, 202);
  } catch (error) {
    console.error("[contact] delivery request failed", {
      requestId,
      provider: "resend",
      reason: error instanceof Error && error.name === "AbortError" ? "timeout" : "network_error",
    });
    return json({ message: DELIVERY_ERROR, reference: requestId }, 502);
  } finally {
    clearTimeout(timeout);
  }
}
