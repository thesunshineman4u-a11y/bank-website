import Image from "next/image";
import type { Metadata } from "next";
import { Building2, Landmark, MonitorSmartphone, ShieldCheck } from "lucide-react";
import { BankingCTA, PageHero } from "@/components/ui-elements";

export const metadata: Metadata = { title: "About Us", description: "Learn about Manjushree Finance Limited, a national-level Class C financial institution licensed by Nepal Rastra Bank." };

export default function AboutPage() {
  const commitments = [
    [Landmark, "Responsible banking", "Products and services delivered within the regulatory framework of Nepal Rastra Bank."],
    [ShieldCheck, "Customer trust", "Secure channels, clear information, and support for everyday financial decisions."],
    [MonitorSmartphone, "Digital access", "Mobile banking, online account opening, cards, QR, and connected payment services."],
    [Building2, "National service", "A growing network serving individuals, families, merchants, and institutions across Nepal."],
  ] as const;
  return <>
    <PageHero eyebrow="About Manjushree" title="A trusted financial partner for a changing Nepal." copy="Manjushree Finance Limited is a national-level Class C financial institution licensed by Nepal Rastra Bank, serving customers through branch and digital channels." />
    <section className="section"><div className="container about-story"><div className="about-photo"><Image src="/product-savings.webp" alt="Customers planning their savings with Manjushree Finance" fill sizes="(max-width: 900px) 100vw, 40vw" /></div><div><p className="eyebrow">Our institution</p><h2>Banking relationships built around real customer needs.</h2><p>Established on 28 Ashoj 2064, Manjushree Finance Limited provides savings and deposit products, cards, digital banking, merchant QR, remittance, transfers, and supporting financial services.</p><p>Our product portfolio serves distinct customer groups—from children beginning their savings journey and salaried professionals managing monthly income to remittance households, premium customers, merchants, and institutions.</p><p>Digital access is central to the experience. Customers can open eligible accounts online, bank through Manjushree Smart, use SCT/UnionPay debit cards, make digital payments, and access connected transfer services.</p><dl className="credentials"><div><dt>Institution type</dt><dd>National-level Class C financial institution</dd></div><div><dt>Regulator</dt><dd>Nepal Rastra Bank</dd></div><div><dt>Established</dt><dd>28 Ashoj 2064</dd></div><div><dt>Head office</dt><dd>Thapathali, Kathmandu, Nepal</dd></div></dl></div></div></section>
    <section className="section soft"><div className="container"><div className="section-header"><p className="eyebrow">What customers can expect</p><h2>Secure, accessible, and connected banking.</h2></div><div className="differentiator-grid">{commitments.map(([Icon,title,copy])=><article key={title}><Icon/><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
    <section className="section"><div className="container"><BankingCTA compact /></div></section>
  </>;
}
