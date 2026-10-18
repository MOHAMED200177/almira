import Link from "next/link";
import { siteConfig } from "@/config/site";
import LanguageSelector from "./LanguageSelector";
import NavLinks from "./NavLinks";
import SmartImage from "./SmartImage";

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <Link href="/" className="brand" aria-label={`${siteConfig.name} home`}>
          <SmartImage src="/almira-logo.png" width={960} height={218} alt={siteConfig.name} priority />
        </Link>
        <div className="header__right">
          <NavLinks />
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
}
