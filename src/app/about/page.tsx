import Link from "next/link";
import AboutFacts from "@/components/AboutFacts";
import { ArrowIcon, CycleIcon, FlaskIcon, GlobeIcon, HeartIcon, PawIcon } from "@/components/Icons";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/config/site";
import { about, type StrengthIcon } from "@/data/about";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/utils";

export const metadata = buildMetadata({
  title: about.seo.title,
  description: about.seo.description,
  path: "/about",
});

const icons: Record<StrengthIcon, React.ComponentType<{ className?: string }>> = {
  flask: FlaskIcon,
  cycle: CycleIcon,
  paw: PawIcon,
  globe: GlobeIcon,
  heart: HeartIcon,
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: about.seo.title,
          description: about.seo.description,
          url: absoluteUrl("/about"),
          mainEntity: {
            "@type": "Organization",
            "@id": absoluteUrl("/#organization"),
            name: siteConfig.name,
            url: absoluteUrl("/"),
            address: { "@type": "PostalAddress", addressLocality: "Poznań", addressCountry: "PL" },
          },
        }}
      />

      <header className="page-hero">
        <div className="container">
          <h1>{about.title}</h1>
          <p>{about.lead}</p>
        </div>
      </header>

      <section className="container section" aria-labelledby="story-title">
        <div className="about-layout">
          <div className="about-prose">
            <h2 id="story-title">Our story</h2>
            {about.story.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <AboutFacts />
        </div>
      </section>

      <section className="container section" aria-labelledby="strengths-title">
        <p className="eyebrow">Why Almira</p>
        <h2 id="strengths-title">Our key strengths</h2>
        <ul className="strengths">
          {about.strengths.map(({ icon, text }) => {
            const Icon = icons[icon];
            return (
              <li key={text}>
                <span className="trust__icon"><Icon /></span>
                <p>{text}</p>
              </li>
            );
          })}
        </ul>
        <p className="about-more">
          <Link href="/products" className="link">Discover our veterinary formulas <ArrowIcon /></Link>
        </p>
      </section>
    </>
  );
}
