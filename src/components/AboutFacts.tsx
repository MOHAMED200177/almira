import { about } from "@/data/about";

/** Short company facts, taken from the "Who We Are" text. `limit` shows only the first few (home teaser). */
export default function AboutFacts({ limit, label = "Almira at a glance" }: { limit?: number; label?: string }) {
  return (
    <ul className="about-facts" aria-label={label}>
      {about.facts.slice(0, limit).map((f) => (
        <li key={f.value}>
          <strong>{f.value}</strong>
          <span>{f.label}</span>
        </li>
      ))}
    </ul>
  );
}
