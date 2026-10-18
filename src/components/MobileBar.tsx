"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BackIcon, ChevronIcon, GridIcon, HomeIcon } from "./Icons";

interface Props {
  products: { id: string; name: string; accent: string }[];
}

/**
 * Thumb-zone dock, shown on phones only (see CSS).
 * Home and catalog pages: Home / Products tabs.
 * Product pages: back to the catalog plus previous / next product, so you can flip through all four with one thumb.
 */
export default function MobileBar({ products }: Props) {
  const pathname = usePathname();
  const index = products.findIndex((p) => pathname === `/products/${p.id}`);

  if (index >= 0) {
    const prev = products[(index - 1 + products.length) % products.length];
    const next = products[(index + 1) % products.length];
    return (
      <nav className="mbar" aria-label="Product navigation">
        <Link href="/products" className="mbar__tab" aria-label="All products">
          <GridIcon />
          <span>All</span>
        </Link>
        <Link href={`/products/${prev.id}`} className="mbar__step" aria-label={`Previous product: ${prev.name}`}>
          <BackIcon />
          <span>{prev.name}</span>
        </Link>
        <Link href={`/products/${next.id}`} className="mbar__step mbar__step--next" aria-label={`Next product: ${next.name}`}>
          <span>{next.name}</span>
          <ChevronIcon />
        </Link>
      </nav>
    );
  }

  const tabs = [
    { href: "/", label: "Home", Icon: HomeIcon, active: pathname === "/" },
    { href: "/products", label: "Products", Icon: GridIcon, active: pathname.startsWith("/products") },
  ];
  return (
    <nav className="mbar" aria-label="Quick navigation">
      {tabs.map(({ href, label, Icon, active }) => (
        <Link key={href} href={href} className={active ? "mbar__tab is-active" : "mbar__tab"} aria-current={active ? "page" : undefined}>
          <Icon />
          <span>{label}</span>
        </Link>
      ))}
    </nav>
  );
}
