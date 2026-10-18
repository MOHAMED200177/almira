import { products } from "@/data/products";
import { categories } from "@/data/categories";
import type { Category, Product } from "@/types";

/**
 * DATA ACCESS LAYER — the only place that knows where data comes from.
 * Pages call these functions and never import the data files directly.
 *
 * To use a real backend later, keep these function signatures and replace
 * the bodies, e.g.:  `return (await fetch("https://api.example.com/products")).json();`
 * Pages run on the server, so the data is part of the HTML that search engines read.
 */

export async function getProducts(): Promise<Product[]> {
  return products;
}

export async function getProductById(id: string): Promise<Product | undefined> {
  return products.find((p) => p.id === id);
}

export async function getCategories(): Promise<Category[]> {
  return categories;
}
