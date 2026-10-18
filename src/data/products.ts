import type { DosageRow, Product } from "@/types";

/**
 * PRODUCTS — the four real veterinary products, with texts taken from the printed bottle labels.
 * Anything the labels do not show (price, stock, dose) is intentionally NOT invented.
 *
 * Images: 721 x 1280 px photos in /public/images/products, served as uploaded (see src/config/images.ts).
 */
const photo = (file: string) => ({
  image: `/images/products/${file}`,
  imageWidth: 721,
  imageHeight: 1280,
});

const LEAFLET = "As stated in the manufacturer's leaflet";

/** The bottle labels print no dose, so every row points to the leaflet. Replace with real values when available. */
const dosage: DosageRow[] = [
  { label: "Cattle", instruction: LEAFLET },
  { label: "Sheep", instruction: LEAFLET },
  { label: "Poultry", instruction: LEAFLET },
  { label: "Withdrawal period", instruction: LEAFLET },
];

const SPECIES = ["Cattle", "Sheep", "Poultry"];
const MANUFACTURER = "Almira";
const PACK = "1000 ml bottle";
const FORM = "Oily form";
const STORAGE = "Keep in a cool, dry place away from direct sunlight, keep the bottle tightly closed and do not freeze.";
const AFTER_OPENING = "Use within 60 days after opening.";

export const products: Product[] = [
  {
    id: "oreganix",
    name: "Oreganix",
    subtitle: "Oregano 26% oily form",
    category: "gut-health",
    description:
      "Oregano 26% oily form that supports healthy gastrointestinal function, intestinal integrity and a balanced gut microbial environment in animals.",
    activeIngredient: "Oregano 26%",
    form: FORM,
    packSize: PACK,
    manufacturer: MANUFACTURER,
    species: SPECIES,
    highlights: [
      "Supports healthy gastrointestinal function and intestinal integrity",
      "Provides natural antioxidant activity",
      "Helps maintain a balanced intestinal microbial environment",
      "Supports digestion, nutrient utilization and overall performance",
    ],
    dosage,
    storage: STORAGE,
    warnings: ["For veterinary use only", "Do not freeze"],
    accent: "#8b5fbf",
    ...photo("oreganix.jpg"),
    imageAlt: "Oreganix oregano 26% oily form, 1000 ml veterinary bottle by Almira, in a poultry house",
  },
  {
    id: "lecmune",
    name: "LecMune",
    subtitle: "Lecithin 30% oily form",
    category: "gut-health",
    description:
      "Lecithin 30% oily form that helps maintain intestinal integrity and a balanced gut environment, and supports normal digestion and nutrient utilization.",
    activeIngredient: "Lecithin 30%",
    form: FORM,
    packSize: PACK,
    manufacturer: MANUFACTURER,
    species: SPECIES,
    highlights: [
      "Helps maintain intestinal integrity and a balanced gut environment",
      "Supports normal digestion and efficient nutrient utilization",
      "Supports healthy gut function, microbial balance and overall performance",
    ],
    dosage,
    storage: STORAGE,
    warnings: ["For veterinary use only", "Do not freeze"],
    accent: "#b0476a",
    ...photo("lecmune.jpg"),
    imageAlt: "LecMune lecithin 30% oily form, 1000 ml veterinary bottle by Almira, in a poultry house",
  },
  {
    id: "e-selfix",
    name: "E.Selfix",
    subtitle: "Vitamin E and selenium oily form",
    category: "vitamins",
    description:
      "Vitamin E and selenium oily form that corrects vitamin E and selenium deficiency, protects cell membranes against oxidative damage and supports fertility.",
    activeIngredient: "Vitamin E + Selenium",
    form: FORM,
    packSize: PACK,
    manufacturer: MANUFACTURER,
    species: SPECIES,
    highlights: [
      "Corrects the deficiency of vitamin E and selenium",
      "Protects cell membranes against oxidative damage",
      "Enhances immunity",
      "Improves fertility and conception rate in males and females",
    ],
    dosage,
    storage: `${STORAGE} ${AFTER_OPENING}`,
    warnings: ["For veterinary use only", "Do not freeze", AFTER_OPENING.replace(/\.$/, "")],
    accent: "#5fae45",
    ...photo("e-selfix.jpg"),
    imageAlt: "E.Selfix vitamin E and selenium oily form, 1000 ml veterinary bottle by Almira, in a poultry house",
  },
  {
    id: "extra-ad",
    name: "Extra-Ad",
    subtitle: "Vitamins A, D3 and E oily form",
    category: "vitamins",
    description:
      "Oily form of vitamins A, D3 and E that corrects deficiencies of these vitamins and supports calcium and phosphorus absorption, bone development and fertility.",
    activeIngredient: "Vitamins A, D3 and E",
    form: FORM,
    packSize: PACK,
    manufacturer: MANUFACTURER,
    species: SPECIES,
    highlights: [
      "Corrects deficiencies of vitamins A, D3 and E",
      "Promotes calcium and phosphorus absorption",
      "Improves bone and skeletal development in young animals",
      "Improves fertility and reproductive performance in breeders",
    ],
    dosage,
    storage: `Keep in a cool, dry place (15–25 °C) away from direct sunlight, keep the bottle tightly closed and do not freeze. ${AFTER_OPENING}`,
    warnings: ["For veterinary use only", "Store at 15–25 °C", "Do not freeze", AFTER_OPENING.replace(/\.$/, "")],
    accent: "#e9a820",
    ...photo("extra-ad.jpg"),
    imageAlt: "Extra-Ad oily form of vitamins A, D3 and E, 1000 ml veterinary bottle by Almira, in a poultry house",
  },
];
