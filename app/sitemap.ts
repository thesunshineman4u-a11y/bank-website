import type { MetadataRoute } from "next";
import { products } from "@/content/products";
import { articles } from "@/content/blog";
import { siteConfig } from "@/lib/config";
export default function sitemap():MetadataRoute.Sitemap{const base=siteConfig.siteUrl.replace(/\/$/,"");const pages=["","/about","/products","/blog","/contact","/privacy","/terms"];return [...pages.map(path=>({url:`${base}${path}`,changeFrequency:"monthly" as const,priority:path===""?1:.7})),...products.map(product=>({url:`${base}/products/${product.slug}`,changeFrequency:"monthly" as const,priority:.8})),...articles.map(a=>({url:`${base}/blog/${a.slug}`,lastModified:new Date(a.date),changeFrequency:"monthly" as const,priority:.6}))]}

