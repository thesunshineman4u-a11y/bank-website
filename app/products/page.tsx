import type { Metadata } from "next";
import { products } from "@/content/products";
import { BankingCTA, PageHero, ProductCard } from "@/components/ui-elements";

export const metadata: Metadata = {
  title: "Banking Products",
  description: "Explore Manjushree savings accounts, fixed deposits, cards, Virtual Credit Card, digital banking, merchant QR, remittance and transaction services.",
};

export default function ProductsPage() {
  return <>
    <PageHero eyebrow="Products" title="Banking products for every day, every stage, and every ambition." copy="Explore deposit accounts, cards, digital payments, transfers, remittance, merchant solutions, and essential banking services." />
    <section className="section products-catalogue">
      <div className="container product-card-grid">
        {products.map((product, index) => <ProductCard key={product.slug} product={product} index={index} />)}
      </div>
    </section>
    <section className="section soft"><div className="container"><BankingCTA /></div></section>
  </>;
}
