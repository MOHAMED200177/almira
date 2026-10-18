/**
 * THEME — the single place to change the website's colors.
 * Each key becomes a CSS variable (e.g. `primary` -> `--color-primary`).
 * The variables are rendered on the server in src/app/layout.tsx (see themeCss),
 * so the page never flashes unstyled colors.
 */
export const theme = {
  primary: "#0b7a80", // clinical teal: links, logo, active states
  primaryDark: "#075a60", // hover / pressed
  primaryDeep: "#052f38", // hero, footer and dock backgrounds
  primarySoft: "#e0f3f2", // light teal tint: chips, soft panels
  secondary: "#2dd4bf", // bright aqua highlight
  blue: "#2f6fd6", // care blue, used in gradients
  accent: "#f2a93b", // warm amber for vitality
  accentSoft: "#fdf0d6",
  background: "#f3f9f9",
  surface: "#ffffff",
  text: "#0a2a2f",
  mutedText: "#47636a",
  border: "#d3e6e6",
  glassStrong: "rgba(255,255,255,0.86)", // frosted header
  glassDark: "rgba(255,255,255,0.1)", // glass on dark backgrounds
  glassDarkBorder: "rgba(255,255,255,0.22)",
} as const;

export type ThemeKey = keyof typeof theme;

const toKebab = (s: string) => s.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());

/** Returns a `:root { --color-...: ...; }` block built from the theme above. */
export function themeCss(): string {
  const vars = (Object.keys(theme) as ThemeKey[]).map((key) => `--color-${toKebab(key)}:${theme[key]};`).join("");
  return `:root{${vars}}`;
}
