import Link from "next/link";
import type { Category, Product } from "@/types";
import { ArrowIcon, PawIcon } from "./Icons";
import SmartImage from "./SmartImage";
import TiltCard from "./TiltCard";

interface Props {
  product: Product;
  category?: Category;
  /** `grid`: full card. `reel`: compact card for horizontal swipe lists. */
  variant?: "grid" | "reel";
  /** Heading level of the card title. Use the level that follows the section heading above the list. */
  headingLevel?: "h2" | "h3";
  /** Mark the image as high priority (preload) for cards that are visible without scrolling. */
  priority?: boolean;
}

/**
 * One card, two layouts (the difference is pure CSS). The whole card is a single link (the title's ::after
 * stretches over it), so there is one tap target and one link for screen readers.
 * The photo is cropped to 4:5 around the bottle; the full, uncropped photo is shown on the detail page.
 */
export default function ProductCard({ product, category, variant = "grid", headingLevel = "h3", priority }: Props) {
  const Heading = headingLevel;
  return (
    <article className={`pcard pcard--${variant}`} style={{ "--accent": product.accent } as React.CSSProperties}>
      <TiltCard className="pcard__tilt" touch={variant !== "reel"} max={variant === "reel" ? 6 : 8}>
        <div className="pcard__media">
          <SmartImage
            src={product.image}
            width={product.imageWidth}
            height={product.imageHeight}
            alt={product.imageAlt}
            sizes={variant === "reel" ? "(max-width: 700px) 62vw, 240px" : "(max-width: 620px) calc(100vw - 2rem), (max-width: 1000px) 45vw, 280px"}
            priority={priority}
          />
        </div>
        <span className="pcard__pill">{product.activeIngredient}</span>
        <div className="pcard__body">
          <p className="pcard__category">{category?.name ?? product.category}</p>
          <Heading className="pcard__title">
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </Heading>
          <p className="pcard__sub">{product.subtitle}</p>
          <p className="pcard__benefit">{product.highlights[0]}</p>
          <ul className="species" aria-label="Target animals">
            {product.species.map((s) => (
              <li key={s}><PawIcon /> {s}</li>
            ))}
          </ul>
          <span className="pcard__go" aria-hidden="true">View details <ArrowIcon /></span>
        </div>
      </TiltCard>
    </article>
  );
}
