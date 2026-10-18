# Almira — Veterinary Products Showcase

A mobile-first, read-only digital catalog for four Almira veterinary products (Oreganix, LecMune, E.Selfix, Extra-Ad).
Built with **Next.js (App Router)**, React and TypeScript. Every page is pre-rendered to static HTML. No forms, no requests, no inquiry buttons.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm run start
npm run typecheck
```

Requires Node.js 20.9+. Set `NEXT_PUBLIC_SITE_URL` (see `.env.example`) **before** building.

## Where to change things

| What | File |
|------|------|
| Products, dosage rows, warnings | `src/data/products.ts` |
| Categories | `src/data/categories.ts` |
| Colors (single source) | `src/config/theme.ts` |
| Brand name, hero text, SEO text | `src/config/site.ts` |
| Language / flag list | `src/config/languages.ts` |

The bottle labels print no dose, so each dosage row reads "As stated in the manufacturer's leaflet". Replace with leaflet values when available.

## What's inside

- **Language selector** (`LanguageSelector`, `Flag`): flag button in the header opens a dropdown (Egypt, Palestine, United States, Poland, Japan). Visual only: no translation logic. Keyboard and screen-reader friendly.
- **Product page image**: the stage has the photo's exact 721:1280 ratio and `object-fit: contain`, so the whole photo, bottle included, is always visible, never cropped or zoomed.
- **Horizontal "More products"** (`ProductReel`): CSS scroll-snap swipe row on phones, a grid on desktop. Used on the home page too.
- **Catalog list**: on phones each card lies flat (photo left, text right) so all four products fit with little scrolling.
- **Thumb-zone dock** (`MobileBar`): Home / Products on regular pages; All / previous / next on product pages.
- **3D and depth**: `TiltCard` (mouse and touch tilt with glare, CSS variables only, no React re-renders) and a scroll-driven depth effect on the reel (pure CSS, where supported). Touch tilt is off inside the reel so swiping always scrolls. Everything respects reduced motion.
- **No animation library**: Framer Motion was removed; all motion is CSS.

## SEO

Per-page title, description, canonical, Open Graph and Twitter tags; one `<h1>` per page; `Product` + `BreadcrumbList` JSON-LD, `ItemList`, `Organization`, `WebSite`; `sitemap.xml`, `robots.txt`, generated OG image. Images via `next/image` (AVIF/WebP).

## Structure

```
src/app/         layout, home, products, products/[id], not-found, sitemap, robots, opengraph-image
src/components/  Header, NavLinks, LanguageSelector, Flag, Hero, ProductCard, ProductGrid, ProductReel, ProductsView,
                 ProductsExplorer, CategoryList, TiltCard, MobileBar, Icons, SmartImage, JsonLd, Footer
src/data/        products.ts, categories.ts
src/services/    catalog.ts   (swap bodies for a real API later)
```
