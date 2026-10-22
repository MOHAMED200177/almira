import JsonLd from "@/components/JsonLd";
import CategoryList from "@/components/CategoryList";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { getCategories, getProducts } from "@/services/catalog";
import { absoluteUrl } from "@/utils";

export const metadata = buildMetadata({
  title: siteConfig.seo.productsTitle,
  description: siteConfig.seo.productsDescription,
  path: "/products",
});

export default async function ProductsPage() {
  const [products, categories] = await Promise.all([getProducts(), getCategories()]);

  return (
    <>
      <header className="page-hero">
        <div className="container">
          <h1>Veterinary products</h1>
          <p>Choose a category to see the products inside it: gut-health support, vitamins A, D3 and E, and selenium.</p>
        </div>
      </header>
      <section className="container section" aria-label="Product catalog">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: siteConfig.seo.productsTitle,
            description: siteConfig.seo.productsDescription,
            url: absoluteUrl("/products"),
            mainEntity: {
              "@type": "ItemList",
              itemListElement: products.map((p, i) => ({
                "@type": "ListItem",
                position: i + 1,
                url: absoluteUrl(`/products/${p.id}`),
                name: `${p.name} – ${p.subtitle}`,
              })),
            },
          }}
        />
        <CategoryList categories={categories} products={products} />
      </section>
    </>
  );
}
