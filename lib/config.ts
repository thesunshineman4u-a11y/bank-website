export const siteConfig = {
  organizationName: "Manjushree Finance Limited",
  founderName: "MANJUSHREE",
  jobTitle: "Corporate Banking & Digital Growth Consultant",
  yearsOfExperience: "[20 years +]",
  qualifications: "[Professional Qualifications]",
  certifications: "[Certifications]",
  email: "[Email Address]",
  phone: "[Phone Number]",
  location: "Nepal",
  linkedin: "[LinkedIn URL]",
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL ?? "",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://banking-ai-growth-nepal.aktarul7331400.chatgpt.site",
  positioning: "Banking Insight. AI-Powered Marketing. Measurable Growth.",
} as const;

export const hasBookingUrl = /^https?:\/\//.test(siteConfig.bookingUrl);
export const bookingHref = hasBookingUrl
  ? siteConfig.bookingUrl
  : "/contact#consultation";

