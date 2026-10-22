import type { FlagCode } from "@/config/languages";

/** Hand-drawn SVG flags (3:2). Decorative: the country name is always written next to them. */
export default function Flag({ code, className }: { code: FlagCode; className?: string }) {
  return (
    <svg viewBox="0 0 30 20" className={className} aria-hidden="true" focusable="false">
      <defs>
        <clipPath id={`flag-${code}`}>
          <rect width="30" height="20" rx="3" />
        </clipPath>
      </defs>
      <g clipPath={`url(#flag-${code})`}>{shapes[code]}</g>
      <rect width="30" height="20" rx="3" fill="none" stroke="rgba(0,0,0,.18)" />
    </svg>
  );
}

const shapes: Record<FlagCode, React.ReactNode> = {
  us: (
    <>
      <rect width="30" height="20" fill="#fff" />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <rect key={i} y={i * 3.077} width="30" height="1.54" fill="#b22234" />
      ))}
      <rect width="13" height="10.8" fill="#3c3b6e" />
      {[0, 1, 2, 3].map((r) =>
        [0, 1, 2, 3].map((c) => <circle key={`${r}${c}`} cx={2 + c * 3 + (r % 2) * 1.5} cy={2 + r * 2.5} r=".6" fill="#fff" />),
      )}
    </>
  ),
  pl: (
    <>
      <rect width="30" height="10" fill="#fff" />
      <rect y="10" width="30" height="10" fill="#dc143c" />
    </>
  ),
  jp: (
    <>
      <rect width="30" height="20" fill="#fff" />
      <circle cx="15" cy="10" r="5" fill="#bc002d" />
    </>
  ),
  nl: (
    <>
      <rect width="30" height="6.67" fill="#ae1c28" />
      <rect y="6.67" width="30" height="6.67" fill="#fff" />
      <rect y="13.33" width="30" height="6.67" fill="#21468b" />
    </>
  ),
  es: (
    <>
      <rect width="30" height="20" fill="#aa151b" />
      <rect y="5" width="30" height="10" fill="#f1bf00" />
    </>
  ),
};
