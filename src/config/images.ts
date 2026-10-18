/**
 * How product photos are delivered.
 *
 * Photos are re-encoded by next/image to AVIF/WebP at the width each phone actually needs
 * (srcset from `deviceSizes` in next.config.ts), which is much lighter than the 137 KB JPEG originals.
 * Quality 85 keeps the small printed label text readable. If you prefer the untouched originals,
 * set `optimize: false`.
 */
export const imageDelivery = { optimize: true, quality: 85 } as const;
