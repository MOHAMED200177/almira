import Link from "next/link";
import { siteConfig } from "@/config/site";
import SmartImage from "./SmartImage";

export default function Footer() {
  const { contact } = siteConfig;
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <SmartImage className="footer__logo" src="/almira-logo-white.png" width={960} height={218} alt={siteConfig.name} />
          <p>{siteConfig.footerNote}</p>
        </div>
        <nav aria-label="Footer">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
        </nav>
        <address>
          <p>{contact.email}</p>
          <p>{contact.phone}</p>
        </address>
      </div>
    </footer>
  );
}
