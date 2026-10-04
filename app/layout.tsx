import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/lib/config";
import { AnalyticsScripts } from "@/components/analytics-scripts";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], display: "swap", variable: "--font-manrope" });
const title = "Manjushree Finance Limited | Savings, Cards & Digital Banking";
const description = "Explore Manjushree savings accounts, fixed deposits, debit and virtual credit cards, digital banking, merchant QR, remittance, and transfer services.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: { default: title, template: `%s | ${siteConfig.organizationName}` },
  description,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: { type: "website", locale: "en_NP", title, description, siteName: siteConfig.organizationName },
  twitter: { card: "summary", title, description },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = { "@context": "https://schema.org", "@type": ["Organization", "FinancialService"], name: siteConfig.organizationName, description, areaServed: { "@type": "Country", name: "Nepal" }, url: siteConfig.siteUrl };
  return <html lang="en"><body className={manrope.variable}><a className="skip-link" href="#main">Skip to main content</a><SiteHeader /><main id="main">{children}</main><SiteFooter /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /><AnalyticsScripts /></body></html>;
}
