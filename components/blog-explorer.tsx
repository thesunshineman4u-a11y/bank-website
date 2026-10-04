"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { articles, categories } from "@/content/blog";

export function BlogExplorer() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => articles.filter(article => (category === "All" || article.category === category) && `${article.title} ${article.excerpt}`.toLowerCase().includes(query.toLowerCase())), [category, query]);
  return <div><div className="blog-tools"><div className="category-pills" role="group" aria-label="Filter by category">{categories.map(item => <button key={item} className={category === item ? "active" : ""} onClick={() => setCategory(item)}>{item}</button>)}</div><label className="search-box"><Search size={18} /><span className="sr-only">Search articles</span><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search insights" /></label></div><div className="article-grid">{filtered.map((article, index) => <article className="article-card" key={article.slug}><div className={`article-art art-${index % 4}`} aria-hidden="true"><span>{article.category}</span></div><div className="article-card-body"><div className="article-meta"><span>{article.category}</span><span>{article.readingTime}</span></div><h2>{article.title}</h2><p>{article.excerpt}</p><div className="article-footer"><time>{article.date}</time><Link href={`/blog/${article.slug}`}>Read article</Link></div></div></article>)}</div>{filtered.length === 0 && <div className="empty-state"><h2>No articles found</h2><p>Try a different category or search phrase.</p></div>}</div>;
}
