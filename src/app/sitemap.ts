import type { MetadataRoute } from "next";
import { getProducts } from "@/services/catalog";
import { absoluteUrl } from "@/utils";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getProducts();
  const lastModified = new Date();
  return [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/products"), lastModified, changeFrequency: "weekly", priority: 0.9 },
    ...products.map((p) => ({
      url: absoluteUrl(`/products/${p.id}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
