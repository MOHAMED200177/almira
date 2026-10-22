import Link from "next/link";
import { siteConfig } from "@/config/site";
import FooterScene from "./FooterScene";
import SmartImage from "./SmartImage";

export default function Footer() {
  const { contact } = siteConfig;
  return (
    <footer className="footer">
      <FooterScene />
      <div className="container footer__inner">
        <div>
          <SmartImage className="footer__logo" src="/almira-logo.png" width={960} height={218} alt={siteConfig.name} />
          <p className="footer__kicker">{siteConfig.footer.kicker}</p>
          <p className="footer__title">{siteConfig.footer.title}</p>
          <p>{siteConfig.footer.text}</p>
        </div>
        <nav aria-label="Footer">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">Who we are</Link>
        </nav>
        <address>
          <p>{contact.email}</p>
          <p>{contact.phone}</p>
        </address>
      </div>
    </footer>
  );
}
