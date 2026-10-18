"use client";

import type { Category, Product } from "@/types";
import ProductGrid from "./ProductGrid";

interface Props {
  products: Product[];
  categories: Category[];
  query: string;
  category: string;
  /** Omit both handlers to render the static (server) version of the toolbar. */
  onQueryChange?: (value: string) => void;
  onCategoryChange?: (value: string) => void;
}

/**
 * Search box + category chips + product grid.
 * Still pre-rendered to HTML on the server with every product (so search engines see the full list);
 * it only needs to be a client component because the input has an onChange handler.
 * The interactive ProductsExplorer re-uses it in the browser.
 */
export default function ProductsView({ products, categories, query, category, onQueryChange, onCategoryChange }: Props) {
  const interactive = Boolean(onQueryChange && onCategoryChange);
  return (
    <>
      <div className="toolbar">
        <input
          type="search"
          value={query}
          readOnly={!interactive}
          onChange={(e) => onQueryChange?.(e.target.value)}
          placeholder="Search by name, ingredient or description"
          aria-label="Search products"
        />
        <div className="chips" role="group" aria-label="Filter by category">
          <button type="button" className={`chip ${!category ? "chip--on" : ""}`} aria-pressed={!category} onClick={() => onCategoryChange?.("")}>
            All
          </button>
          {categories.map((c) => (
            <button
              type="button"
              key={c.id}
              className={`chip ${category === c.id ? "chip--on" : ""}`}
              aria-pressed={category === c.id}
              onClick={() => onCategoryChange?.(c.id)}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>
      <ProductGrid products={products} categories={categories} headingLevel="h2" priorityCount={4} />
    </>
  );
}
