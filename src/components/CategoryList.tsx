import Link from "next/link";
import type { Category, Product } from "@/types";
import { ArrowIcon, CategoryGlyph } from "./Icons";

export default function CategoryList({ categories, products }: { categories: Category[]; products: Product[] }) {
  return (
    <ul className="category-list">
      {categories.map((c) => {
        const items = products.filter((p) => p.category === c.id);
        return (
          <li key={c.id}>
            <Link href={`/products?category=${c.id}`} className="category-card">
              <span className="category-card__icon"><CategoryGlyph icon={c.icon} /></span>
              <div>
                <h3>{c.name}</h3>
                <p>{c.description}</p>
                <p className="category-card__names">{items.map((p) => p.name).join(" · ")}</p>
              </div>
              <ArrowIcon className="category-card__arrow" />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
