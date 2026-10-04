import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { bookingHref, hasBookingUrl } from "@/lib/config";
import type { Service } from "@/content/services";

export function SectionHeader({ eyebrow, title, copy, light = false }: { eyebrow: string; title: string; copy?: string; light?: boolean }) {
  return <div className={`section-header ${light ? "section-header-light" : ""}`}><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  return <article className="service-card"><div className="service-card-top"><span className="icon-box"><Icon aria-hidden="true" /></span><span className="card-number">0{index + 1}</span></div><h3>{service.title}</h3><p>{service.summary}</p><Link href={`/services/${service.slug}`}>Explore service <ArrowUpRight size={17} aria-hidden="true" /></Link></article>;
}

export function ConsultationCTA({ compact = false }: { compact?: boolean }) {
  return <section className={`consultation-cta ${compact ? "compact" : ""}`}><div className="consultation-copy"><p className="eyebrow light">Free strategy consultation</p><h2>Get a customized digital marketing plan for your business</h2><p>We’ll review your products, customers, current marketing, and growth objectives—then outline practical opportunities your team can begin acting on.</p><ul>{["Business and digital presence review", "Customer acquisition opportunities", "Channel and content priorities", "AI and automation opportunities", "Initial action plan"].map(item => <li key={item}><Check size={17} />{item}</li>)}</ul></div><div className="consultation-action"><p className="mini-label">Your next step</p><h3>A practical working session—not a generic sales pitch.</h3><a className="button button-light" href={bookingHref} target={hasBookingUrl ? "_blank" : undefined} rel={hasBookingUrl ? "noreferrer" : undefined}>Book my free consultation</a><small>{hasBookingUrl ? "No obligation. Practical recommendations focused on your business." : "Booking integration coming soon. Continue to the consultation form."}</small></div></section>;
}

export function PageHero({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return <section className="page-hero"><div className="container"><p className="eyebrow light">{eyebrow}</p><h1>{title}</h1><p>{copy}</p></div></section>;
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return <nav className="breadcrumbs" aria-label="Breadcrumb">{items.map((item, i) => <span key={item.label}>{i > 0 && <b>/</b>}{item.href ? <Link href={item.href}>{item.label}</Link> : item.label}</span>)}</nav>;
}

