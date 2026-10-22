import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import ProductGrid from "@/components/ProductGrid";
import { ArrowIcon, CategoryGlyph } from "@/components/Icons";
import { buildMetadata } from "@/lib/seo";
import { getCategories, getProducts } from "@/services/catalog";
import { absoluteUrl } from "@/utils";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return (await getCategories()).map((c) => ({ id: c.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const category = (await getCategories()).find((c) => c.id === id);
  if (!category) return { title: "Category not found", robots: { index: false } };
  return buildMetadata({
    title: `${category.name}: Veterinary Products`,
    description: category.description,
    path: `/categories/${category.id}`,
  });
}

export default async function CategoryPage({ params }: Props) {
  const { id } = await params;
  const [categories, allProducts] = await Promise.all([getCategories(), getProducts()]);
  const category = categories.find((c) => c.id === id);
  if (!category) notFound();

  const products = allProducts.filter((p) => p.category === category.id);
  const others = categories.filter((c) => c.id !== category.id);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CollectionPage",
              name: category.name,
              description: category.description,
              url: absoluteUrl(`/categories/${category.id}`),
              mainEntity: {
                "@type": "ItemList",
                itemListElement: products.map((p, i) => ({
                  "@type": "ListItem",
                  position: i + 1,
                  url: absoluteUrl(`/products/${p.id}`),
                  name: `${p.name} – ${p.subtitle}`,
                })),
              },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
                { "@type": "ListItem", position: 2, name: "Products", item: absoluteUrl("/products") },
                { "@type": "ListItem", position: 3, name: category.name, item: absoluteUrl(`/categories/${category.id}`) },
              ],
            },
          ],
        }}
      />
      <header className="page-hero page-hero--category">
        <div className="container">
          <nav aria-label="Breadcrumb" className="crumbs crumbs--light">
            <Link href="/">Home</Link> <span aria-hidden="true">/</span> <Link href="/products">Products</Link>{" "}
            <span aria-hidden="true">/</span> <span aria-current="page">{category.name}</span>
          </nav>
          <span className="page-hero__emblem" aria-hidden="true"><CategoryGlyph icon={category.icon} /></span>
          <h1>{category.name}</h1>
          <p>{category.description}</p>
        </div>
      </header>

      <section className="container section" aria-label={`${category.name} products`}>
        <ProductGrid products={products} categories={categories} headingLevel="h2" priorityCount={4} />
      </section>

      {others.length > 0 && (
        <section className="container section" aria-labelledby="other-categories">
          <h2 id="other-categories">Other categories</h2>
          <ul className="chips chips--links">
            {others.map((c) => (
              <li key={c.id}>
                <Link href={`/categories/${c.id}`} className="chip">{c.name} <ArrowIcon /></Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
