export type CategoryIcon = "gut" | "vitamin";

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: CategoryIcon;
}

export interface DosageRow {
  /** Animal group or parameter, e.g. "Cattle" or "Withdrawal period". */
  label: string;
  instruction: string;
}

export interface Product {
  id: string;
  /** Brand name as printed on the bottle, e.g. "Oreganix". */
  name: string;
  /** Short product descriptor printed under the brand name, e.g. "Oregano 26% oily form". */
  subtitle: string;
  /** Matches a Category.id */
  category: string;
  description: string;
  activeIngredient: string;
  form: string;
  packSize: string;
  manufacturer: string;
  /** Target animals shown on the label. */
  species: string[];
  /** Label claims, shown as a checklist. */
  highlights: string[];
  /** Dose per animal group. Only values printed on the label/leaflet may be entered here. */
  dosage: DosageRow[];
  storage: string;
  warnings: string[];
  /** Brand colour of the label, used as a soft glow behind the bottle. */
  accent: string;
  image: string;
  /** Intrinsic size of the image file in pixels (prevents layout shift). */
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
}
