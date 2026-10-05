import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check, ExternalLink } from "lucide-react";
import { products, savingsAccounts } from "@/content/products";
import { BankingCTA, Breadcrumbs } from "@/components/ui-elements";

export function generateStaticParams() { return products.map((product) => ({ slug: product.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) return {};
  return { title: product.title, description: product.summary, alternates: { canonical: `/products/${slug}` } };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();
  const Icon = product.icon;

  return <>
    <section className="detail-hero product-detail-hero"><div className="container">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: product.shortTitle }]} />
      <div className="product-hero-grid"><div className="detail-title"><Icon /><p className="eyebrow light">{product.category}</p><h1>{product.title}</h1><p>{product.summary}</p></div><div className="product-hero-image"><Image src={product.image} alt={product.imageAlt} fill sizes="(max-width: 900px) 100vw, 42vw" style={{ objectPosition: product.cardImagePosition ?? "center" }} /></div></div>
    </div></section>
    <section className="section"><div className="container product-detail-layout">
      <aside className="product-facts"><span>At a glance</span>{product.facts?.map((fact) => <div key={fact.label}><small>{fact.label}</small><strong>{fact.value}</strong></div>)}</aside>
      <article className="prose product-prose">
        <div className="product-highlight-list">{product.highlights.map((item) => <div key={item}><Check />{item}</div>)}</div>
        {slug === "savings-accounts" && <section id="account-options"><p className="eyebrow">Current account options</p><h2>Savings accounts at a glance</h2><div className="rate-table" role="table" aria-label="Savings account rates and minimum balances"><div className="rate-row rate-head" role="row"><span>Account</span><span>Minimum balance</span><span>Interest</span></div>{savingsAccounts.map((account) => <div className="rate-row" role="row" key={account.name}><strong>{account.name}</strong><span>{account.minimum}</span><span>{account.interest}</span></div>)}</div><p className="rate-note">Interest is shown as provided in the supplied product information and is paid quarterly. Confirm current rates before applying.</p></section>}
        {product.sections.map((section) => <section key={section.title}><h2>{section.title}</h2><p>{section.body}</p>{section.items && <ul className="check-list">{section.items.map((item) => <li key={item}><Check />{item}</li>)}</ul>}</section>)}
        {product.sourceUrl && <p className="source-link"><Link href={product.sourceUrl} target="_blank" rel="noreferrer">View current official information <ExternalLink /></Link></p>}
        <div className="financial-disclaimer"><strong>Important</strong><p>Rates, fees, limits, benefits, eligibility and service availability can change. Please verify the latest official schedule and product terms before applying or transacting.</p></div>
      </article>
    </div></section>
    <section className="section soft"><div className="container"><BankingCTA compact /></div></section>
  </>;
}
