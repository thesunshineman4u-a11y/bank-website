"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/config";
import { trackEvent } from "@/lib/analytics";

const links = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Products", "/products"],
  ["Insights", "/blog"],
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
          <span><strong>{siteConfig.organizationName}</strong><small>Your trusted financial partner</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className={pathname === href ? "active" : ""}>{label}</Link>
          ))}
        </nav>
        <a
          className="button button-small nav-cta"
          href="https://online.manjushreefinance.com.np/"
          target="_blank"
          rel="noreferrer"
          onClick={() => trackEvent("account_opening_click", { location: "navigation" })}
        >Open an account</a>
        <button className="menu-button" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="mobile-panel">
          <nav aria-label="Mobile navigation">
            {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
            <a className="button" href="https://online.manjushreefinance.com.np/" target="_blank" rel="noreferrer">Open an account</a>
          </nav>
        </div>
      )}
    </header>
  );
}

