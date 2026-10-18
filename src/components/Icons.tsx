import type { CategoryIcon } from "@/types";

interface IconProps {
  className?: string;
}

const base = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true } as const;

export const CrossIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}><path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z" /></svg>
);

export const ShieldIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}><path d="M12 3l7 3v5c0 5-3 8.5-7 10-4-1.5-7-5-7-10V6z" /><path d="M9 12l2 2 4-4" /></svg>
);

export const DropIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}><path d="M12 3c3.5 4.2 6 7.2 6 10.5A6 6 0 0 1 6 13.5C6 10.2 8.5 7.2 12 3z" /></svg>
);

export const PawIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <ellipse cx="6.5" cy="10" rx="1.8" ry="2.4" /><ellipse cx="17.5" cy="10" rx="1.8" ry="2.4" />
    <ellipse cx="10" cy="5.8" rx="1.8" ry="2.4" /><ellipse cx="14" cy="5.8" rx="1.8" ry="2.4" />
    <path d="M12 12c-3 0-5.5 3-5.5 5.2 0 1.9 1.7 2.8 3.2 2.3.9-.3 1.5-.6 2.3-.6s1.4.3 2.3.6c1.5.5 3.2-.4 3.2-2.3C17.5 15 15 12 12 12z" />
  </svg>
);

export const CheckIcon = ({ className }: IconProps) => (
  <svg {...base} strokeWidth={2.4} className={className}><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
);

export const ArrowIcon = ({ className }: IconProps) => (
  <svg {...base} strokeWidth={2.2} className={className}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);

export const ChevronDownIcon = ({ className }: IconProps) => (
  <svg {...base} strokeWidth={2.4} className={className}><path d="M6 9l6 6 6-6" /></svg>
);

/** Stethoscope-style heartbeat line used as a decorative accent. */
export const PulseIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}><path d="M3 12h4l2-6 4 12 2-6h6" /></svg>
);

/** Gut-health: a gentle intestinal coil. */
const GutIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}><path d="M5 8c0-2.5 3-3 7-3s7 .5 7 3-3 2.6-7 2.6S5 11 5 13.3 8 16 12 16s7 .3 7 2.7-3 2.6-7 2.6" /></svg>
);

/** Vitamins: a capsule. */
const VitaminIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}><rect x="3" y="8.5" width="18" height="7" rx="3.5" transform="rotate(-35 12 12)" /><path d="M9.2 7.4l7.4 9.2" /></svg>
);

export const CategoryGlyph = ({ icon, className }: { icon: CategoryIcon } & IconProps) =>
  icon === "gut" ? <GutIcon className={className} /> : <VitaminIcon className={className} />;

export const HomeIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}><path d="M4 11l8-7 8 7" /><path d="M6 10v9h12v-9" /><path d="M10 19v-5h4v5" /></svg>
);

export const GridIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}><rect x="4" y="4" width="7" height="7" rx="2" /><rect x="13" y="4" width="7" height="7" rx="2" /><rect x="4" y="13" width="7" height="7" rx="2" /><rect x="13" y="13" width="7" height="7" rx="2" /></svg>
);

export const ChevronIcon = ({ className }: IconProps) => (
  <svg {...base} strokeWidth={2.2} className={className}><path d="M9 5l7 7-7 7" /></svg>
);

export const BackIcon = ({ className }: IconProps) => (
  <svg {...base} strokeWidth={2.2} className={className}><path d="M15 5l-7 7 7 7" /></svg>
);
