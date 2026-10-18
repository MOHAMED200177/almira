import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckIcon, PawIcon, ShieldIcon } from "@/components/Icons";
import JsonLd from "@/components/JsonLd";
import ProductReel from "@/components/ProductReel";
import SmartImage from "@/components/SmartImage";
import TiltCard from "@/components/TiltCard";
import { buildMetadata } from "@/lib/seo";
import { getCategories, getProductById, getProducts } from "@/services/catalog";
import { absoluteUrl } from "@/utils";

type Props = { params: Promise<{ id: string }> };

// Every product page is generated at build time; unknown ids show the 404 page.
export const dynamicParams = false;

export async function generateStaticParams() {
  return (await getProducts()).map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = await getProductById(id);
  if (!product) return { title: "Product not found", robots: { index: false } };

  return buildMetadata({
    title: `${product.name} – ${product.subtitle}`,
    description: product.description,
    path: `/products/${product.id}`,
    image: { url: product.image, width: product.imageWidth, height: product.imageHeight, alt: product.imageAlt },
  });
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const [product, categories, allProducts] = await Promise.all([getProductById(id), getCategories(), getProducts()]);
  if (!product) notFound();
  const p = product;

  const category = categories.find((c) => c.id === p.category);
  const related = allProducts.filter((x) => x.id !== p.id);
  const url = absoluteUrl(`/products/${p.id}`);

  const specs: [string, string][] = [
    ["Active ingredient", p.activeIngredient],
    ["Form", p.form],
    ["Pack size", p.packSize],
    ["Manufacturer", p.manufacturer],
    ["Target animals", p.species.join(", ")],
    ["Category", category?.name ?? p.category],
  ];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Product",
              "@id": `${url}#product`,
              name: `${p.name} – ${p.subtitle}`,
              description: p.description,
              image: absoluteUrl(p.image),
              sku: p.id,
              url,
              brand: { "@type": "Brand", name: p.name },
              manufacturer: { "@type": "Organization", name: p.manufacturer },
              category: category?.name,
              size: p.packSize,
              audience: { "@type": "Audience", audienceType: `Veterinary use: ${p.species.join(", ")}` },
              additionalProperty: [
                { "@type": "PropertyValue", name: "Active ingredient", value: p.activeIngredient },
                { "@type": "PropertyValue", name: "Form", value: p.form },
                { "@type": "PropertyValue", name: "Target animals", value: p.species.join(", ") },
                { "@type": "PropertyValue", name: "Storage", value: p.storage },
              ],
              // No price or stock is published on this site, so no Offer is declared.
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
                { "@type": "ListItem", position: 2, name: "Products", item: absoluteUrl("/products") },
                { "@type": "ListItem", position: 3, name: p.name, item: url },
              ],
            },
          ],
        }}
      />

      <section className="container section detail-section" style={{ "--accent": p.accent } as React.CSSProperties}>
        <nav aria-label="Breadcrumb" className="crumbs">
          <Link href="/">Home</Link> <span aria-hidden="true">/</span> <Link href="/products">Products</Link>{" "}
          <span aria-hidden="true">/</span> <span aria-current="page">{p.name}</span>
        </nav>

        <article className="detail">
          <div className="detail__stage">
            <div className="detail__glow" aria-hidden="true" />
            <TiltCard className="detail__tilt" max={6}>
              <SmartImage
                className="detail__img"
                src={p.image}
                width={p.imageWidth}
                height={p.imageHeight}
                alt={p.imageAlt}
                sizes="(max-width: 900px) 70vw, 380px"
                priority
              />
            </TiltCard>
          </div>

          <div className="detail__info">
            <ul className="tags" aria-label="Product tags">
              <li className="tag tag--solid"><ShieldIcon /> For veterinary use only</li>
              <li className="tag">{p.form}</li>
              <li className="tag">{p.packSize}</li>
            </ul>
            <h1>{p.name}</h1>
            <p className="detail__subtitle">{p.subtitle}</p>
            <p className="detail__lead">{p.description}</p>

            <h2 className="sr-only">At a glance</h2>
            <dl className="glance">
              <div><dt>Active ingredient</dt><dd>{p.activeIngredient}</dd></div>
              <div><dt>Dose</dt><dd>See manufacturer&apos;s leaflet</dd></div>
              <div className="glance__wide">
                <dt>Target animals</dt>
                <dd>
                  <ul className="species species--lg" aria-label="Target animals">
                    {p.species.map((s) => (
                      <li key={s}><PawIcon /> {s}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </article>

        <div className="detail__panels">
          <details className="panel glass" open>
            <summary><h2>Benefits <small>from the label</small></h2></summary>
            <ul className="checklist">
              {p.highlights.map((h) => (
                <li key={h}><CheckIcon /> {h}</li>
              ))}
            </ul>
          </details>

          <details className="panel glass">
            <summary><h2>Dosage &amp; administration</h2></summary>
            <div className="table-wrap">
              <table className="table">
                <caption className="sr-only">Dosage instructions for {p.name}</caption>
                <thead>
                  <tr><th scope="col">Animal / parameter</th><th scope="col">Instruction</th></tr>
                </thead>
                <tbody>
                  {p.dosage.map((row) => (
                    <tr key={row.label}><th scope="row">{row.label}</th><td>{row.instruction}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="note">No dose is printed on the bottle label. Follow the manufacturer&apos;s leaflet and your veterinarian&apos;s advice.</p>
          </details>

          <details className="panel glass">
            <summary><h2>Specifications</h2></summary>
            <dl className="specs">
              {specs.map(([k, v]) => (
                <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
              ))}
            </dl>
          </details>

          <details className="panel glass">
            <summary><h2>Storage &amp; safety</h2></summary>
            <p>{p.storage}</p>
            <ul className="tags tags--wrap">
              {p.warnings.map((w) => (
                <li key={w} className="tag tag--amber">{w}</li>
              ))}
            </ul>
          </details>
        </div>

      </section>

      <section className="section" aria-labelledby="related-title">
        <div className="container">
          <h2 id="related-title">More products</h2>
        </div>
        <ProductReel products={related} categories={categories} label="More products, swipe sideways" />
      </section>
    </>
  );
}
