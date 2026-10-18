import { Suspense } from "react";
import JsonLd from "@/components/JsonLd";
import ProductsExplorer from "@/components/ProductsExplorer";
import ProductsView from "@/components/ProductsView";
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
          <p>
            Oily-form formulas for cattle, sheep and poultry: gut-health support, vitamins A, D3 and E, and selenium.
            Search by name or ingredient, or filter by category.
          </p>
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
        {/*
          The search box reads the URL, which makes Next.js render this part in the browser.
          The fallback is the full product list, so the HTML that search engines receive
          already contains every product.
        */}
        <Suspense fallback={<ProductsView products={products} categories={categories} query="" category="" />}>
          <ProductsExplorer products={products} categories={categories} />
        </Suspense>
      </section>
    </>
  );
}
