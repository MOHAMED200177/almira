import type { Category } from "@/types";

/** CATEGORIES — a product belongs to a category through its `category` field (the id here). */
export const categories: Category[] = [
  {
    id: "gut-health",
    name: "Gut Health & Digestion",
    description: "Oily-form supplements that support intestinal integrity, digestion and nutrient utilization.",
    icon: "gut",
  },
  {
    id: "vitamins",
    name: "Vitamins & Fertility",
    description: "Vitamin and selenium formulas that correct deficiencies and support immunity and reproduction.",
    icon: "vitamin",
  },
];
