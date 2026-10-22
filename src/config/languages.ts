/**
 * Language / region choices for the header selector.
 * The selector is a visual component only: choosing an entry does not translate the site (yet).
 */
export type FlagCode = "us" | "pl" | "jp" | "nl" | "es";

export interface Language {
  code: FlagCode;
  /** Country or region name shown in bold. */
  region: string;
  /** Language name written in that language. */
  native: string;
  /** BCP-47 code of `native`, so screen readers pronounce it correctly. */
  lang: string;
}

export const languages: Language[] = [
  { code: "us", region: "United States", native: "English", lang: "en" },
  { code: "pl", region: "Poland", native: "Polski", lang: "pl" },
  { code: "jp", region: "Japan", native: "日本語", lang: "ja" },
  { code: "nl", region: "Netherlands", native: "Nederlands", lang: "nl" },
  { code: "es", region: "Spain", native: "Español", lang: "es" },
];
