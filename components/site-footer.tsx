import Link from "next/link";
import { siteConfig } from "@/lib/config";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-cta">
        <div><p className="eyebrow light">Banking that moves with you</p><h2>Ready to open your account?</h2></div>
        <a className="button button-light" href="https://online.manjushreefinance.com.np/" target="_blank" rel="noreferrer">Open an account online</a>
      </div>
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" className="brand brand-inverse"><span className="brand-mark"><span /></span><strong>{siteConfig.organizationName}</strong></Link>
          <p>Savings, cards, digital payments, remittance, transfers, and essential banking services for customers across Nepal.</p>
        </div>
        <div><h3>Navigate</h3><Link href="/">Home</Link><Link href="/about">About Us</Link><Link href="/products">Products</Link><Link href="/blog">Insights</Link><Link href="/contact">Contact</Link></div>
        <div><h3>Products</h3><Link href="/products/savings-accounts">Savings accounts</Link><Link href="/products/fixed-deposit">Fixed deposit</Link><Link href="/products/cards-and-vcc">Cards & VCC</Link><Link href="/products/manjushree-smart">Digital banking</Link><Link href="/products/merchant-qr">Merchant QR</Link></div>
        <div><h3>Contact</h3><span>{siteConfig.email}</span><span>{siteConfig.phone}</span><span>{siteConfig.location}</span><span>{siteConfig.linkedin}</span></div>
      </div>
      <div className="container disclaimer">Rates, fees, limits, product benefits, eligibility and availability may change. Please verify the latest official schedule and product terms with Manjushree Finance Limited before applying or transacting.</div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} {siteConfig.organizationName}. All rights reserved.</span><span><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms & Conditions</Link></span></div>
    </footer>
  );
}

