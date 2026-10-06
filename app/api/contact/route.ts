import { NextResponse } from "next/server";
import { z } from "zod";

const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/thesunshineman4u@gmail.com";
const CONTACT_PAGE_URL = "https://banking-ai-growth-nepal.aktarul7331400.chatgpt.site/contact";

const schema = z.object({
  fullName: z.string().trim().min(2).max(100),
  businessName: z.string().trim().min(2).max(150),
  jobTitle: z.string().trim().max(100).optional().default(""),
  email: z.string().trim().email().max(180),
  phone: z.string().trim().max(40).optional().default(""),
  industry: z.string().trim().min(2).max(80),
  companySize: z.string().trim().max(30).optional().default(""),
  primaryGoal: z.string().trim().min(2).max(120),
  services: z.union([z.string(), z.array(z.string())]).optional(),
  budget: z.string().trim().max(80).optional().default(""),
  message: z.string().trim().min(20).max(4000),
  contactMethod: z.enum(["Email", "Phone", "WhatsApp"]).default("Email"),
  consent: z.union([z.literal("on"), z.literal("true"), z.literal(true)]),
  companyFax: z.string().max(0).optional().default(""),
});

const attempts = new Map<string, { count: number; reset: number }>();

export async function POST(request: Request) {
  const ip = request.headers.get("cf-connecting-ip")
    ?? request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    ?? "unknown";
  const now = Date.now();
  const record = attempts.get(ip);

  if (record && record.reset > now && record.count >= 5) {
    return NextResponse.json({ message: "Too many enquiries. Please try again later." }, { status: 429 });
  }

  attempts.set(ip, record && record.reset > now
    ? { ...record, count: record.count + 1 }
    : { count: 1, reset: now + 3_600_000 });

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: "Please complete all required fields with valid information." },
      { status: 400 },
    );
  }

  const enquiry = parsed.data;
  const formSubmitPayload = {
    "Full name": enquiry.fullName,
    "Account holder or organization": enquiry.businessName,
    "Account number": enquiry.jobTitle || "Not provided",
    email: enquiry.email,
    Phone: enquiry.phone || "Not provided",
    "Customer type": enquiry.industry,
    "Preferred service channel": enquiry.companySize || "Not selected",
    "Primary enquiry": enquiry.primaryGoal,
    "Products or services": Array.isArray(enquiry.services)
      ? enquiry.services.join(", ")
      : enquiry.services || "Not selected",
    "Preferred branch or location": enquiry.budget || "Not provided",
    Message: enquiry.message,
    "Preferred contact method": enquiry.contactMethod,
    _subject: `New Manjushree website enquiry from ${enquiry.fullName}`,
    _replyto: enquiry.email,
    _template: "table",
    _captcha: "false",
    _url: CONTACT_PAGE_URL,
  };

  try {
    const response = await fetch(FORMSUBMIT_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: "https://banking-ai-growth-nepal.aktarul7331400.chatgpt.site",
        Referer: CONTACT_PAGE_URL,
      },
      body: JSON.stringify(formSubmitPayload),
    });
    const result = await response.json().catch(() => null) as { success?: boolean; message?: string } | null;

    if (!response.ok || result?.success === false) {
      throw new Error(result?.message || "FormSubmit rejected the enquiry.");
    }

    return NextResponse.json({
      delivered: true,
      message: "Thank you. We have received your banking enquiry and will contact you shortly.",
    });
  } catch {
    return NextResponse.json(
      { message: "We could not deliver your message. Please try again or use the contact details shown on this page." },
      { status: 502 },
    );
  }
}
