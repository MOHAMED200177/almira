"use client";

import { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  /** Maximum tilt angle in degrees (mouse). Touch uses a gentler 60% of it. */
  max?: number;
  /**
   * Tilt on finger drag. Turn this off for cards inside a horizontal swipe list, so a sideways
   * swipe on a card scrolls the list instead of being captured by the tilt.
   */
  touch?: boolean;
}

/**
 * 3D tilt + glare for mouse, pen and (optionally) touch. The pointer position is written straight to CSS
 * variables (throttled with requestAnimationFrame), so React never re-renders while the pointer moves.
 * Only transform and opacity change, which the browser composites on the GPU.
 * With touch enabled, `touch-action: pan-y` (see CSS) keeps vertical scrolling native.
 * Disabled for visitors who prefer reduced motion.
 */
export default function TiltCard({ children, className = "", max = 9, touch = true }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);
  const enabled = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: no-preference)");
    const update = () => {
      enabled.current = mq.matches;
    };
    update();
    mq.addEventListener("change", update);
    return () => {
      mq.removeEventListener("change", update);
      cancelAnimationFrame(frame.current);
    };
  }, []);

  const apply = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || !enabled.current) return;
    const { clientX, clientY, pointerType } = e;
    if (pointerType === "touch" && !touch) return;
    const strength = pointerType === "mouse" ? max : max * 0.6;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const r = el.getBoundingClientRect();
      const x = Math.min(1, Math.max(0, (clientX - r.left) / r.width));
      const y = Math.min(1, Math.max(0, (clientY - r.top) / r.height));
      el.dataset.active = "true";
      el.style.setProperty("--rx", `${((0.5 - y) * strength * 2).toFixed(2)}deg`);
      el.style.setProperty("--ry", `${((x - 0.5) * strength * 2).toFixed(2)}deg`);
      el.style.setProperty("--mx", `${(x * 100).toFixed(1)}%`);
      el.style.setProperty("--my", `${(y * 100).toFixed(1)}%`);
    });
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(frame.current);
    el.dataset.active = "false";
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <div
      ref={ref}
      className={`tilt ${className}`}
      data-touch={touch}
      onPointerDown={apply}
      onPointerMove={apply}
      onPointerUp={reset}
      onPointerCancel={reset}
      onPointerLeave={reset}
    >
      {children}
      <span className="tilt__glare" aria-hidden="true" />
    </div>
  );
}
