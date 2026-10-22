import Link from "next/link";
import type { Category, Product } from "@/types";
import { ArrowIcon, CategoryGlyph } from "./Icons";

/**
 * One large tile per category: emblem, name, description and the product names inside.
 * Each tile opens the category page (/categories/[id]), which lists that category's products.
 */
export default function CategoryList({ categories, products }: { categories: Category[]; products: Product[] }) {
  return (
    <ul className="category-list">
      {categories.map((c) => {
        const items = products.filter((p) => p.category === c.id);
        return (
          <li key={c.id}>
            <Link href={`/categories/${c.id}`} className={`category-tile category-tile--${c.icon}`}>
              <span className="category-tile__emblem" aria-hidden="true">
                <CategoryGlyph icon={c.icon} />
              </span>
              <h3>{c.name}</h3>
              <p>{c.description}</p>
              <p className="category-tile__names">{items.map((p) => p.name).join(" · ")}</p>
              <span className="category-tile__go">
                {items.length} {items.length === 1 ? "product" : "products"} <ArrowIcon />
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
