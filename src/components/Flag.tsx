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
  eg: (
    <>
      <rect width="30" height="7" fill="#ce1126" />
      <rect y="6.67" width="30" height="6.67" fill="#fff" />
      <rect y="13.33" width="30" height="6.67" fill="#000" />
      <path d="M15 7.6c1.5 0 2.4 1 2.4 2.1 0 1.4-1.2 2.7-2.4 2.7s-2.4-1.3-2.4-2.7c0-1.1.9-2.1 2.4-2.1z" fill="#c09300" />
    </>
  ),
  ps: (
    <>
      <rect width="30" height="6.67" fill="#000" />
      <rect y="6.67" width="30" height="6.67" fill="#fff" />
      <rect y="13.33" width="30" height="6.67" fill="#007a3d" />
      <path d="M0 0l13 10L0 20z" fill="#ce1126" />
    </>
  ),
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
};
