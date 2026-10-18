import Link from "next/link";
import CategoryList from "@/components/CategoryList";
import Hero from "@/components/Hero";
import { ArrowIcon, DropIcon, PawIcon, ShieldIcon } from "@/components/Icons";
import JsonLd from "@/components/JsonLd";
import ProductReel from "@/components/ProductReel";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { getCategories, getProducts } from "@/services/catalog";
import { absoluteUrl } from "@/utils";

export const metadata = buildMetadata({
  // The layout's title template does not apply to the page in the same folder, so the full title is given here.
  title: `${siteConfig.seo.homeTitle} | ${siteConfig.name}`,
  absoluteTitle: true,
  description: siteConfig.seo.homeDescription,
  path: "/",
});

const trust = [
  { Icon: ShieldIcon, title: "For veterinary use only", text: "Professional-grade formulas by Almira." },
  { Icon: PawIcon, title: "Cattle, sheep & poultry", text: "Labelled for three livestock groups." },
  { Icon: DropIcon, title: "Oily-form formulas", text: "Ready-to-use 1000 ml bottles." },
];

export default async function HomePage() {
  const [categories, products] = await Promise.all([getCategories(), getProducts()]);
  const back = products.find((p) => p.id === "oreganix") ?? products[0];
  const front = products.find((p) => p.id === "extra-ad") ?? products[products.length - 1];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": absoluteUrl("/#organization"),
              name: siteConfig.name,
              url: absoluteUrl("/"),
              logo: absoluteUrl("/almira-logo.png"),
              description: siteConfig.seo.homeDescription,
            },
            {
              "@type": "WebSite",
              "@id": absoluteUrl("/#website"),
              url: absoluteUrl("/"),
              name: siteConfig.name,
              inLanguage: "en",
              publisher: { "@id": absoluteUrl("/#organization") },
            },
            {
              "@type": "ItemList",
              name: "Veterinary products",
              itemListElement: products.map((p, i) => ({
                "@type": "ListItem",
                position: i + 1,
                url: absoluteUrl(`/products/${p.id}`),
                name: `${p.name} – ${p.subtitle}`,
              })),
            },
          ],
        }}
      />
      <Hero back={back} front={front} />

      <section className="container trust" aria-label="Why choose these products">
        <ul>
          {trust.map(({ Icon, title, text }) => (
            <li key={title} className="trust__item">
              <span className="trust__icon"><Icon /></span>
              <div>
                <strong>{title}</strong>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="section" aria-labelledby="featured-title">
        <div className="container section__head">
          <div>
            <p className="eyebrow">Our formulas</p>
            <h2 id="featured-title">Featured veterinary products</h2>
          </div>
          <Link href="/products" className="link">See all <ArrowIcon /></Link>
        </div>
        <ProductReel products={products} categories={categories} label="Featured products, swipe sideways" />
      </section>

      <section className="container section" aria-labelledby="categories-title">
        <p className="eyebrow">Browse by need</p>
        <h2 id="categories-title">Product categories</h2>
        <CategoryList categories={categories} products={products} />
      </section>
    </>
  );
}
