import type { Metadata } from "next";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/ui-elements";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = { title: "Contact", description: "Contact Manjushree Finance for account, card, digital banking, merchant QR, remittance, transfer, and other service enquiries." };

export default function ContactPage(){return <><PageHero eyebrow="Contact" title="How can we help you today?" copy="Ask about an account, card, digital service, merchant payment, transfer, remittance, or another banking service."/><section className="section" id="enquiry"><div className="container contact-layout"><aside className="contact-sidebar"><div className="contact-path primary"><Phone/><p className="eyebrow light">Customer support</p><h2>Speak with Manjushree</h2><p>Contact the customer service team for product information and service support.</p><a className="button button-light" href="tel:014792517">Call 01-4792517</a></div><div className="contact-details"><h3>Contact details</h3><span><Mail/>{siteConfig.email}</span><span><Phone/>{siteConfig.phone}</span><span><MapPin/>{siteConfig.location}</span><p><ShieldCheck/>Never share your password, PIN, OTP, or complete card details through this form.</p></div></aside><div><p className="eyebrow">Send an enquiry</p><h2>Tell us what you need help with.</h2><p className="form-intro">Choose the relevant product and include enough information for our team to guide you. Do not include sensitive credentials.</p><ContactForm/></div></div></section></>}
