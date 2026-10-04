"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { bookingHref, hasBookingUrl, siteConfig } from "@/lib/config";
import { trackEvent } from "@/lib/analytics";

const links = [
  ["Home", "/"],
  ["About Me", "/about"],
  ["Services", "/services"],
  ["Blog", "/blog"],
  ["Contact", "/contact"],
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand" aria-label={`${siteConfig.organizationName} home`}>
          <span className="brand-mark" aria-hidden="true"><span /></span>
          <span><strong>{siteConfig.organizationName}</strong><small>Banking insight × digital growth</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className={pathname === href ? "active" : ""}>{label}</Link>
          ))}
        </nav>
        <a
          className="button button-small nav-cta"
          href={bookingHref}
          target={hasBookingUrl ? "_blank" : undefined}
          rel={hasBookingUrl ? "noreferrer" : undefined}
          onClick={() => trackEvent("consultation_cta_click", { location: "navigation" })}
        >Book a free consultation</a>
        <button className="menu-button" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="mobile-panel">
          <nav aria-label="Mobile navigation">
            {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
            <a className="button" href={bookingHref}>Book a free consultation</a>
          </nav>
        </div>
      )}
    </header>
  );
}

