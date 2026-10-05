import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import type { Product } from "@/content/products";

export function SectionHeader({ eyebrow, title, copy, light = false }: { eyebrow: string; title: string; copy?: string; light?: boolean }) {
  return <div className={`section-header ${light ? "section-header-light" : ""}`}><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}

export function ProductCard({ product, index }: { product: Product; index: number }) {
  const Icon = product.icon;
  return <article className="product-card"><div className="product-card-image" style={{ backgroundImage: `linear-gradient(180deg, transparent, rgba(23,63,120,.82)), url(${product.image})`, backgroundPosition: product.cardImagePosition ?? "center" }}><span>{product.category}</span></div><div className="product-card-body"><div className="product-card-top"><span className="icon-box"><Icon aria-hidden="true" /></span><span className="card-number">{String(index + 1).padStart(2, "0")}</span></div><h2>{product.title}</h2><p>{product.summary}</p><div className="mini-tags">{product.highlights.slice(0, 2).map((item) => <span key={item}>{item}</span>)}</div><Link href={`/products/${product.slug}`}>View product details <ArrowUpRight size={17} aria-hidden="true" /></Link></div></article>;
}

export function BankingCTA({ compact = false }: { compact?: boolean }) {
  return <section className={`consultation-cta banking-cta ${compact ? "compact" : ""}`}><div className="consultation-copy"><p className="eyebrow light">Start banking with us</p><h2>Open an account or ask about the right product for you.</h2><p>Choose from savings, fixed deposits, cards, digital banking, merchant QR, remittance, and transaction services.</p><ul>{["Online account opening", "Support for Nepalese citizens, minors and NRNs", "Branch and digital banking access", "Clear product guidance"].map(item => <li key={item}><Check size={17} />{item}</li>)}</ul></div><div className="consultation-action"><p className="mini-label">Get started</p><h3>Open your account online or contact our team for support.</h3><a className="button button-light" href="https://online.manjushreefinance.com.np/" target="_blank" rel="noreferrer">Open an account</a><Link className="text-link light" href="/contact">Contact Manjushree</Link></div></section>;
}

export function PageHero({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return <section className="page-hero"><div className="container"><p className="eyebrow light">{eyebrow}</p><h1>{title}</h1><p>{copy}</p></div></section>;
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return <nav className="breadcrumbs" aria-label="Breadcrumb">{items.map((item, i) => <span key={item.label}>{i > 0 && <b>/</b>}{item.href ? <Link href={item.href}>{item.label}</Link> : item.label}</span>)}</nav>;
}

