import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, CreditCard, Landmark, MonitorSmartphone, Send, ShieldCheck } from "lucide-react";
import { featuredProducts, savingsAccounts } from "@/content/products";
import { BankingCTA, ProductCard, SectionHeader } from "@/components/ui-elements";

const bankingServices = [
  [Send, "Remittance", "Receive money through Western Union, IME, City Express, Himal Remit, Prabhu, eSewa Money Transfer, and other listed partners."],
  [ShieldCheck, "DEMAT & C-ASBA", "Access capital-market support alongside your everyday deposit relationship."],
  [Landmark, "Payments & transfers", "Use ConnectIPS, IPS, RTGS, internal transfers, and Manager's Cheques."],
  [CreditCard, "Cards", "Bank securely with a chip-enabled debit card and a digital-first Virtual Credit Card."],
] as const;

const faqs = [
  ["Can I open a savings account online?", "Yes. The online account-opening journey supports Nepalese citizens, minors, and Non-Resident Nepalese, with document requirements shown for each applicant type."],
  ["How often is savings interest paid?", "The supplied account information states that interest is paid quarterly. Rates can change, so please confirm the latest published schedule before applying."],
  ["What is the Manjushree Virtual Credit Card?", "It is a digital card for secure online payments. The published schedule lists a joining fee of NPR 550, annual and renewal fees of NPR 600, and interest of 2% per month."],
  ["Which QR networks are supported?", "Merchant QR supports both Fonepay QR and NEPALPAY QR, including static and dynamic QR options and Fonepay-supported UPI acceptance for Indian visitors."],
  ["Where can I use the debit card?", "The chip-enabled debit card works through the SCT and UnionPay networks. Withdrawal and balance enquiry are available without charge at member-bank ATMs nationwide, subject to current terms."],
];

export default function HomePage() {
  return <>
    <section className="hero"><div className="hero-glow" aria-hidden="true" /><div className="container hero-grid">
      <div className="hero-copy"><p className="eyebrow light">Manjushree Finance Limited</p><h1>Banking made <em>simple, secure,</em> and connected.</h1><p className="hero-lead">Save, pay, transfer, and manage your money with products built for everyday life, families, businesses, and digital-first customers across Nepal.</p><div className="hero-actions"><a className="button button-light" href="https://online.manjushreefinance.com.np/" target="_blank" rel="noreferrer">Open an account online</a><Link className="text-link light" href="/products">Explore our products <ArrowRight size={18} /></Link></div><div className="hero-proof"><span><Check /> Secure digital banking</span><span><Check /> Clear product choices</span><span><Check /> Branch and online access</span></div></div>
      <div className="hero-visual"><div className="hero-image-frame"><Image className="hero-person" src="/homepage-presenter.png" alt="Financial professional speaking with customers" width={1024} height={1536} priority sizes="(max-width: 900px) 100vw, 48vw" /></div><div className="hero-float float-one"><span>Open from anywhere</span><strong>Online account opening</strong></div><div className="hero-float float-two"><MonitorSmartphone /><span>Banking access<br/><strong>24 hours a day</strong></span></div></div>
    </div></section>

    <section className="trust-bar" aria-label="Core banking services"><div className="container">{["Savings & deposits", "Cards & VCC", "Manjushree Smart", "Merchant QR", "Remittance & transfers"].map((item) => <span key={item}>{item}</span>)}</div></section>

    <section className="section services-section"><div className="container"><div className="heading-row"><SectionHeader eyebrow="Featured products" title="Banking solutions for how you live and work." copy="Explore savings accounts, cards, digital banking, and merchant payments with clear product information and easy next steps."/><Link className="text-link" href="/products">View all products <ArrowRight size={18}/></Link></div><div className="product-card-grid home-product-grid">{featuredProducts.map((product, index) => <ProductCard key={product.slug} product={product} index={index}/>)}</div></div></section>

    <section className="section savings-highlight"><div className="container savings-layout"><div><p className="eyebrow">Savings accounts</p><h2>Choose an account built around you.</h2><p>From zero-balance everyday accounts to premium, women-focused, children, and remittance options, each account serves a distinct customer need.</p><Link className="text-link" href="/products/savings-accounts">Compare account benefits <ArrowRight size={18}/></Link></div><div className="rate-table home-rate-table" role="table" aria-label="Savings account rates and minimum balances"><div className="rate-row rate-head" role="row"><span>Account</span><span>Minimum</span><span>Interest</span></div>{savingsAccounts.map((account) => <div className="rate-row" role="row" key={account.name}><strong>{account.name}</strong><span>{account.minimum}</span><span>{account.interest}</span></div>)}</div></div></section>

    <section className="section vcc-highlight"><div className="container vcc-grid"><div className="vcc-image"><Image src="/product-vcc.webp" alt="Manjushree Fonepay Virtual Credit Card available through a mobile phone" fill sizes="(max-width: 900px) 100vw, 50vw" /></div><div><p className="eyebrow light">Virtual Credit Card</p><h2>Pay smarter in your digital world.</h2><p>Make secure online payments with a card designed for digital use. The current published schedule includes transparent joining, annual, renewal, interest, and EMI charges.</p><div className="vcc-facts"><div><span>Joining fee</span><strong>NPR 550</strong></div><div><span>Annual fee</span><strong>NPR 600</strong></div><div><span>Interest</span><strong>2% / month</strong></div><div><span>EMI</span><strong>From 9.99%</strong></div></div><Link className="button button-light" href="/products/cards-and-vcc">See VCC details</Link></div></div></section>

    <section className="section soft"><div className="container"><SectionHeader eyebrow="More ways to bank" title="One financial partner. A connected service ecosystem." copy="Use digital and branch channels for payments, transfers, remittance, merchant acceptance, and supporting services."/><div className="audience-grid banking-service-grid">{bankingServices.map(([Icon, title, copy]) => <article key={title}><Icon/><h3>{title}</h3><p>{copy}</p></article>)}</div><div className="center-link"><Link className="text-link" href="/products">Explore every product <ArrowRight size={18}/></Link></div></div></section>

    <section className="section account-opening"><div className="container account-opening-grid"><div><p className="eyebrow">Online account opening</p><h2>Start your account from wherever you are.</h2><p>The online journey supports Nepalese citizens, minors, and NRNs. Select an account, provide the required identity documents, and track your application online.</p><div className="process-line compact-process">{[["01","Choose","Select the savings account that fits your needs."],["02","Prepare","Review the document list for your applicant type."],["03","Apply","Complete the secure online application."],["04","Track","Use your reference and mobile number to follow progress."]].map(([number,title,copy])=><article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div><div className="account-opening-card"><Landmark/><span>Available online</span><h3>Open your Manjushree account</h3><p>Begin securely through the official online account-opening portal.</p><a className="button" href="https://online.manjushreefinance.com.np/" target="_blank" rel="noreferrer">Start online application</a></div></div></section>

    <section className="section"><div className="container"><BankingCTA /></div></section>

    <section className="section faq-section"><div className="container faq-layout"><SectionHeader eyebrow="Frequently asked questions" title="Useful answers before you get started."/><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>

    <section className="final-cta"><div className="container"><p className="eyebrow light">Ready when you are</p><h2>Bring your everyday banking into one connected experience.</h2><p>Open an account online or explore the full range of Manjushree products and services.</p><a className="button button-light" href="https://online.manjushreefinance.com.np/" target="_blank" rel="noreferrer">Open an account online</a><small>Rates, fees, limits and benefits are subject to current official terms.</small></div></section>
  </>;
}
