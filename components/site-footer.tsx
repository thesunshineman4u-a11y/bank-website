import Link from "next/link";
import { bookingHref, siteConfig } from "@/lib/config";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-cta">
        <div><p className="eyebrow light">A clearer path to growth</p><h2>Ready to grow your business?</h2></div>
        <a className="button button-light" href={bookingHref}>Book a free consultation call</a>
      </div>
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" className="brand brand-inverse"><span className="brand-mark"><span /></span><strong>{siteConfig.organizationName}</strong></Link>
          <p>A strategic growth partner combining corporate banking knowledge with AI-powered digital marketing.</p>
        </div>
        <div><h3>Navigate</h3><Link href="/">Home</Link><Link href="/about">About Me</Link><Link href="/services">Services</Link><Link href="/blog">Blog</Link><Link href="/contact">Contact</Link></div>
        <div><h3>Services</h3><Link href="/services/ai-powered-digital-marketing-strategy">Digital strategy</Link><Link href="/services/financial-product-marketing">Financial product marketing</Link><Link href="/services/lead-generation">Lead generation</Link><Link href="/services/seo-content-marketing">SEO & content</Link><Link href="/services/ai-marketing-automation">AI & automation</Link></div>
        <div><h3>Contact</h3><span>{siteConfig.email}</span><span>{siteConfig.phone}</span><span>{siteConfig.location}</span><span>{siteConfig.linkedin}</span></div>
      </div>
      <div className="container disclaimer">The information on this website is provided for general business and marketing purposes. Financial product terms, rates, fees, eligibility criteria, and regulatory requirements may change and should always be verified with the relevant financial institution.</div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} {siteConfig.organizationName}. All rights reserved.</span><span><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms & Conditions</Link></span></div>
    </footer>
  );
}

