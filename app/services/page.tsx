import type { Metadata } from "next";
import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import { services } from "@/content/services";
import { ConsultationCTA, PageHero } from "@/components/ui-elements";

export const metadata: Metadata = { title: "Digital Growth Services", description: "AI-powered digital strategy, financial product marketing, lead generation, SEO, automation, conversion, and analytics services." };

export default function ServicesPage(){return <><PageHero eyebrow="Services" title="Digital growth services built around business outcomes." copy="From strategic clarity to acquisition systems and ongoing measurement, every engagement connects marketing decisions to a commercial objective."/><section className="section"><div className="container service-detail-list">{services.map((service,index)=>{const Icon=service.icon;return <article key={service.slug} id={service.slug}><div className="service-index">{String(index+1).padStart(2,"0")}</div><div className="service-summary"><Icon/><h2>{service.title}</h2><p>{service.summary}</p><Link className="text-link" href={`/services/${service.slug}`}>View service details <ArrowUpRight size={17}/></Link></div><div className="service-deliverables"><h3>Typical deliverables</h3><ul>{service.deliverables.slice(0,6).map(item=><li key={item}><Check/>{item}</li>)}</ul><p><strong>Expected outcome:</strong> {service.outcome}</p></div></article>})}</div></section><section className="section"><div className="container"><ConsultationCTA compact/></div></section></>}

