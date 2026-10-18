"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { Category, Product } from "@/types";
import ProductsView from "./ProductsView";

interface Props {
  products: Product[];
  categories: Category[];
}

/**
 * Interactive search + category filter. The state lives here (so typing never lags)
 * and is mirrored into the URL (?q=...&category=...) so filtered pages can be shared.
 */
export default function ProductsExplorer({ products, categories }: Props) {
  const params = useSearchParams();
  const [query, setQuery] = useState(params.get("q") ?? "");
  const [category, setCategory] = useState(params.get("category") ?? "");

  // Follow URL changes that come from outside this component (links, back/forward).
  useEffect(() => {
    const real = new URLSearchParams(window.location.search);
    // Our own history.replaceState updates reach useSearchParams a moment later; skip those stale values.
    if (real.toString() !== params.toString()) return;
    setQuery(real.get("q") ?? "");
    setCategory(real.get("category") ?? "");
  }, [params]);

  const writeUrl = (q: string, c: string) => {
    const next = new URLSearchParams();
    if (q) next.set("q", q);
    if (c) next.set("category", c);
    const qs = next.toString();
    window.history.replaceState(null, "", qs ? `?${qs}` : window.location.pathname);
  };

  const onQueryChange = (value: string) => {
    setQuery(value);
    writeUrl(value, category);
  };
  const onCategoryChange = (value: string) => {
    setCategory(value);
    writeUrl(query, value);
  };

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter(
      (p) =>
        (!category || p.category === category) &&
        (!q || [p.name, p.subtitle, p.description, p.activeIngredient].some((t) => t.toLowerCase().includes(q))),
    );
  }, [products, query, category]);

  return (
    <ProductsView
      products={visible}
      categories={categories}
      query={query}
      category={category}
      onQueryChange={onQueryChange}
      onCategoryChange={onCategoryChange}
    />
  );
}
