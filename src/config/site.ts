/** General site settings: brand text, footer info, SEO defaults. Edit freely. */
export const siteConfig = {
  name: "Almira",
  tagline: "Veterinary medicines for livestock health",
  heroTitle: "Veterinary care that keeps animals thriving",
  heroText:
    "We are a global leader in animal health dedicated to innovating and delivering products and services to prevent and treat disease in farm animals and pets, creating value for farmers, veterinarians, stakeholders, and society as a whole.",
  locale: "en-EG",
  contact: {
    email: "info@almira.com.pl",
    phone: "+48 22 417 83 65",
  },
  footer: {
    kicker: "Trust Innovation",
    title: "Continued growth and improvement",
    text: "At Almira, we understand that consistent growth is only achieved with a firm commitment to evolution and improvement. Ideas and suggestions for new partnerships, new products and new technologies are always welcome.",
  },

  /** Public site URL. Set NEXT_PUBLIC_SITE_URL in your hosting environment (see .env.example). */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com").replace(/\/$/, ""),

  /** SEO text used in <title>, meta description and Open Graph tags. */
  seo: {
    homeTitle: "Veterinary Medicines for Cattle, Sheep & Poultry",
    homeDescription:
      "Veterinary oily-form supplements by Almira: Oreganix, LecMune, E.Selfix and Extra-Ad for gut health, vitamins A, D3 and E, and selenium in cattle, sheep and poultry.",
    productsTitle: "Veterinary Products: Gut Health, Vitamins & Selenium",
    productsDescription:
      "Browse Oreganix, LecMune, E.Selfix and Extra-Ad: veterinary oily-form products for livestock and poultry health, organised by category.",
    keywords: [
      "veterinary medicines",
      "livestock health",
      "poultry supplements",
      "oregano oily form",
      "lecithin for animals",
      "vitamin E and selenium for animals",
      "vitamins A D3 E for livestock",
      "Almira veterinary",
      "veterinary products Egypt",
    ],
  },
} as const;
