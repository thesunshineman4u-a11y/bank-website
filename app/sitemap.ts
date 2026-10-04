import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { articles } from "@/content/blog";
import { siteConfig } from "@/lib/config";
export default function sitemap():MetadataRoute.Sitemap{const base=siteConfig.siteUrl.replace(/\/$/,"");const pages=["","/about","/services","/blog","/contact","/privacy","/terms"];return [...pages.map(path=>({url:`${base}${path}`,changeFrequency:"monthly" as const,priority:path===""?1:.7})),...services.map(s=>({url:`${base}/services/${s.slug}`,changeFrequency:"monthly" as const,priority:.7})),...articles.map(a=>({url:`${base}/blog/${a.slug}`,lastModified:new Date(a.date),changeFrequency:"monthly" as const,priority:.6}))]}

