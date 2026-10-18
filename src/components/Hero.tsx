import Link from "next/link";
import { siteConfig } from "@/config/site";
import type { Product } from "@/types";
import { ArrowIcon, CrossIcon, DropIcon, PawIcon, PulseIcon, ShieldIcon } from "./Icons";
import SmartImage from "./SmartImage";
import TiltCard from "./TiltCard";

const rise = (i: number) => ({ style: { "--i": i } as React.CSSProperties });

/**
 * Landing hero. Everything animates with CSS only (entrance, heartbeat line, drifting glows),
 * so the headline paints without waiting for JavaScript. Only the two bottle cards are interactive (3D tilt).
 */
export default function Hero({ back, front }: { back: Product; front: Product }) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true">
        <span className="blob blob--a" />
        <span className="blob blob--b" />
        <PawIcon className="deco deco--paw1" />
        <PawIcon className="deco deco--paw2" />
        <CrossIcon className="deco deco--cross" />
        <svg className="ecg" viewBox="0 0 600 80" preserveAspectRatio="none">
          <path pathLength="1" d="M0 40h170l16-26 22 52 20-44 14 18h38l12-14 14 26 12-12h282" />
        </svg>
      </div>

      <div className="container hero__inner">
        <div className="hero__text">
          <p className="hero__badge rise" {...rise(0)}><ShieldIcon /> For veterinary use only</p>
          <h1 id="hero-title" className="rise rise--solid" {...rise(1)}>{siteConfig.heroTitle}</h1>
          <p className="hero__lead rise" {...rise(2)}>{siteConfig.heroText}</p>
          <div className="hero__actions rise" {...rise(3)}>
            <Link href="/products" className="btn btn--light">Explore products <ArrowIcon /></Link>
          </div>
          <ul className="hero__facts rise" {...rise(4)} aria-label="Key facts">
            <li><strong>4</strong> formulas</li>
            <li><strong>1000 ml</strong> bottles</li>
            <li><strong>3</strong> animal groups</li>
          </ul>
        </div>

        <div className="hero__visual">
          <Link href={`/products/${back.id}`} className="hero__bottle hero__bottle--back" aria-label={`${back.name}: view details`}>
            <TiltCard className="hero-tilt">
              <SmartImage src={back.image} width={back.imageWidth} height={back.imageHeight} alt={back.imageAlt} sizes="(max-width: 900px) 44vw, 260px" />
            </TiltCard>
          </Link>
          <Link href={`/products/${front.id}`} className="hero__bottle hero__bottle--front" aria-label={`${front.name}: view details`}>
            <TiltCard className="hero-tilt">
              <SmartImage src={front.image} width={front.imageWidth} height={front.imageHeight} alt={front.imageAlt} sizes="(max-width: 900px) 48vw, 280px" priority />
            </TiltCard>
          </Link>
          <p className="chip-float chip-float--a"><DropIcon /> Oily-form formulas</p>
          <p className="chip-float chip-float--b"><PulseIcon /> Gut health · Vitamins</p>
        </div>
      </div>
    </section>
  );
}
