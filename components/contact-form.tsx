"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const industries = ["Bank", "Finance Company", "Cooperative", "Fintech", "Insurance", "SME", "Retail", "Professional Services", "Technology", "Hospitality", "Education", "Other"];
const goals = ["Generate More Leads", "Increase Deposits", "Generate Loan Enquiries", "Acquire Merchants", "Improve Brand Awareness", "Improve SEO", "Increase Website Conversion", "Improve Social Media", "Implement AI/Automation", "Build Digital Marketing Strategy", "Other"];
const services = ["Digital Strategy", "Financial Product Marketing", "Lead Generation", "SEO & Content", "Social Media & Advertising", "AI & Automation", "Website & Conversion", "Analytics & Growth"];

export function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "not-configured" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form));
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const result = await response.json() as { delivered?: boolean; message?: string };
      if (!response.ok) throw new Error(result.message || "Please review the form and try again.");
      setMessage(result.message || "Thank you. We have received your enquiry and will contact you regarding your consultation.");
      setState(result.delivered ? "sent" : "not-configured");
      if (result.delivered) { trackEvent("contact_form_submit"); form.reset(); }
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
      setState("error");
    }
  }

  if (state === "sent") return <div className="form-success" role="status"><CheckCircle2 /><h3>Thank you.</h3><p>{message}</p></div>;

  return (
    <form className="contact-form" onSubmit={submit} onFocus={() => trackEvent("contact_form_start")} noValidate>
      <div className="honeypot" aria-hidden="true"><label>Leave this blank<input name="companyFax" tabIndex={-1} autoComplete="off" /></label></div>
      <div className="field-grid">
        <label>Full name *<input name="fullName" required minLength={2} autoComplete="name" /></label>
        <label>Business name *<input name="businessName" required minLength={2} autoComplete="organization" /></label>
        <label>Job title<input name="jobTitle" autoComplete="organization-title" /></label>
        <label>Email *<input name="email" type="email" required autoComplete="email" /></label>
        <label>Phone<input name="phone" type="tel" autoComplete="tel" /></label>
        <label>Industry *<select name="industry" required defaultValue=""><option value="" disabled>Select industry</option>{industries.map(item => <option key={item}>{item}</option>)}</select></label>
        <label>Company size<select name="companySize" defaultValue=""><option value="">Select size</option><option>1–10</option><option>11–50</option><option>51–200</option><option>201–500</option><option>500+</option></select></label>
        <label>Website<input name="website" type="url" placeholder="https://" /></label>
        <label>Primary goal *<select name="primaryGoal" required defaultValue=""><option value="" disabled>Select primary goal</option>{goals.map(item => <option key={item}>{item}</option>)}</select></label>
        <label>Monthly marketing budget<select name="budget" defaultValue=""><option value="">Prefer not to say</option><option>Under NPR 50,000</option><option>NPR 50,000–150,000</option><option>NPR 150,000–500,000</option><option>NPR 500,000+</option><option>Not yet decided</option></select></label>
      </div>
      <fieldset><legend>Services interested in</legend><div className="check-grid">{services.map(item => <label key={item}><input type="checkbox" name="services" value={item} />{item}</label>)}</div></fieldset>
      <label>Message *<textarea name="message" rows={5} required minLength={20} placeholder="Tell us about your products, customers, current marketing, and growth goals." /></label>
      <fieldset><legend>Preferred contact method</legend><div className="radio-row"><label><input type="radio" name="contactMethod" value="Email" defaultChecked />Email</label><label><input type="radio" name="contactMethod" value="Phone" />Phone</label><label><input type="radio" name="contactMethod" value="WhatsApp" />WhatsApp</label></div></fieldset>
      <label className="consent"><input type="checkbox" name="consent" required />I consent to being contacted about this enquiry and understand that no financial advice is being provided. *</label>
      {state === "not-configured" && <div className="form-note" role="status">{message}</div>}
      {state === "error" && <div className="form-error" role="alert">{message}</div>}
      <button className="button" type="submit" disabled={state === "sending"}>{state === "sending" ? "Submitting…" : <>Submit consultation enquiry <Send size={17} /></>}</button>
    </form>
  );
}

