import type { Category, Product } from "@/types";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
  categories: Category[];
  headingLevel?: "h2" | "h3";
  /** Number of leading cards whose images are preloaded (use only for cards above the fold). */
  priorityCount?: number;
}

export default function ProductGrid({ products, categories, headingLevel = "h3", priorityCount = 0 }: Props) {
  if (products.length === 0) {
    return <p className="empty">No products match your search. Try a different word or choose another category.</p>;
  }
  return (
    <ul className="grid">
      {products.map((p, i) => (
        <li key={p.id}>
          <ProductCard product={p} category={categories.find((c) => c.id === p.category)} headingLevel={headingLevel} priority={i < priorityCount} />
        </li>
      ))}
    </ul>
  );
}
