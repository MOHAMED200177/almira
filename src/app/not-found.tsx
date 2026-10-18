import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="container section notfound">
      <h1 className="page-title">Page not found</h1>
      <p className="empty">The page or product you are looking for does not exist.</p>
      <p className="center"><Link href="/products" className="btn">Back to products</Link></p>
    </section>
  );
}
