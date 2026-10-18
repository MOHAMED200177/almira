import Image from "next/image";
import { imageDelivery } from "@/config/images";

interface Props {
  src: string;
  width: number;
  height: number;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}

/**
 * Wrapper around next/image. Photos are served untouched unless
 * `imageDelivery.optimize` is enabled (see src/config/images.ts); SVGs are never re-encoded.
 */
export default function SmartImage({ src, width, height, alt, sizes, priority, className }: Props) {
  const optimize = imageDelivery.optimize && !src.endsWith(".svg");
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      sizes={sizes}
      priority={priority}
      className={className}
      unoptimized={!optimize}
      quality={optimize ? imageDelivery.quality : undefined}
    />
  );
}
