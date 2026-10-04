export type AnalyticsEvent =
  | "consultation_cta_click"
  | "contact_form_start"
  | "contact_form_submit"
  | "service_view"
  | "blog_article_view"
  | "phone_click"
  | "email_click"
  | "booking_click";

export function trackEvent(name: AnalyticsEvent, properties?: Record<string, string>) {
  if (typeof window === "undefined") return;
  const payload = { event: name, ...properties };
  window.dispatchEvent(new CustomEvent("site:analytics", { detail: payload }));
  const dataLayer = (window as typeof window & { dataLayer?: unknown[] }).dataLayer;
  dataLayer?.push(payload);
}

