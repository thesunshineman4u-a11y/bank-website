"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const customerTypes = ["Individual", "Minor / Guardian", "Non-Resident Nepalese", "Merchant", "Business / Institution", "Existing Customer", "New Customer", "Other"];
const goals = ["Open a Savings Account", "Place a Fixed Deposit", "Debit Card Support", "Virtual Credit Card", "Mobile Banking Support", "Merchant QR Enrollment", "Remittance", "Payments and Transfers", "DEMAT / C-ASBA", "Locker or Other Service"];
const products = ["Savings Accounts", "Fixed Deposit", "Debit Card", "Virtual Credit Card", "Manjushree Smart", "Merchant QR", "Remittance", "ConnectIPS / IPS / RTGS", "DEMAT / C-ASBA", "Safe-Deposit Locker"];

export function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    const form = event.currentTarget;
    if (!form.reportValidity()) {
      setState("idle");
      return;
    }
    const formData = new FormData(form);
    const payload: Record<string, FormDataEntryValue | FormDataEntryValue[]> = Object.fromEntries(formData);
    payload.services = formData.getAll("services");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const result = await response.json().catch(() => null) as { accepted?: boolean; message?: string; reference?: string } | null;
      const reference = result?.reference ? ` Reference: ${result.reference}` : "";
      if (!response.ok || !result?.accepted) {
        throw new Error(`${result?.message || "Please review the form and try again."}${reference}`);
      }
      setMessage(result.message || "Thank you. We have received your banking enquiry and will contact you shortly.");
      setState("sent");
      trackEvent("contact_form_submit");
      form.reset();
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
        <label>Account holder or organization *<input name="businessName" required minLength={2} autoComplete="organization" /></label>
        <label>Account number (optional)<input name="jobTitle" inputMode="numeric" /></label>
        <label>Email *<input name="email" type="email" required autoComplete="email" /></label>
        <label>Phone<input name="phone" type="tel" autoComplete="tel" /></label>
        <label>Customer type *<select name="industry" required defaultValue=""><option value="" disabled>Select customer type</option>{customerTypes.map(item => <option key={item}>{item}</option>)}</select></label>
        <label>Preferred service channel<select name="companySize" defaultValue=""><option value="">Select a channel</option><option>Phone</option><option>Email</option><option>Branch visit</option><option>Digital support</option></select></label>
        <label>Primary enquiry *<select name="primaryGoal" required defaultValue=""><option value="" disabled>Select an enquiry</option>{goals.map(item => <option key={item}>{item}</option>)}</select></label>
        <label>Preferred branch or location<input name="budget" placeholder="e.g. Thapathali" /></label>
      </div>
      <fieldset><legend>Products or services interested in</legend><div className="check-grid">{products.map(item => <label key={item}><input type="checkbox" name="services" value={item} />{item}</label>)}</div></fieldset>
      <label>Message *<textarea name="message" rows={5} required minLength={20} placeholder="Describe the product or support you need. Do not include passwords, PINs, OTPs, or full card details." /></label>
      <fieldset><legend>Preferred contact method</legend><div className="radio-row"><label><input type="radio" name="contactMethod" value="Email" defaultChecked />Email</label><label><input type="radio" name="contactMethod" value="Phone" />Phone</label><label><input type="radio" name="contactMethod" value="WhatsApp" />WhatsApp</label></div></fieldset>
      <label className="consent"><input type="checkbox" name="consent" required />I consent to being contacted about this banking enquiry. *</label>
      {state === "error" && <div className="form-error" role="alert">{message}</div>}
      <button className="button" type="submit" disabled={state === "sending"}>{state === "sending" ? "Submitting…" : <>Submit banking enquiry <Send size={17} /></>}</button>
    </form>
  );
}

