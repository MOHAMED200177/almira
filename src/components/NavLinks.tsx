"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home", exact: true },
  { href: "/products", label: "Products", exact: false },
];

/** Main navigation. Client component only because it highlights the current page. */
export default function NavLinks() {
  const pathname = usePathname();
  return (
    <nav className="nav" aria-label="Main">
      {links.map(({ href, label, exact }) => {
        const active = exact ? pathname === href : pathname.startsWith(href);
        return (
          <Link key={href} href={href} className={active ? "active" : undefined} aria-current={active ? "page" : undefined}>
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
