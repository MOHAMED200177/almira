import type { Category, Product } from "@/types";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
  categories: Category[];
  headingLevel?: "h2" | "h3";
  /** Accessible name of the scrolling region. */
  label: string;
}

/**
 * Horizontal, touch-swipeable row of compact cards (CSS scroll-snap, no JavaScript).
 * Used for "More products" and the home page showcase, so nothing stacks into a long vertical scroll on phones.
 * The region is focusable so keyboard users can scroll it with the arrow keys.
 */
export default function ProductReel({ products, categories, headingLevel = "h3", label }: Props) {
  return (
    <div className="reel" role="region" aria-label={label} tabIndex={0}>
      <ul className="reel__track">
        {products.map((p) => (
          <li key={p.id} className="reel__item">
            <ProductCard product={p} category={categories.find((c) => c.id === p.category)} variant="reel" headingLevel={headingLevel} />
          </li>
        ))}
      </ul>
    </div>
  );
}
