"use client";

import { useEffect, useId, useRef, useState } from "react";
import { languages, type Language } from "@/config/languages";
import Flag from "./Flag";
import { CheckIcon, ChevronDownIcon } from "./Icons";

/**
 * Flag dropdown for the header. Purely visual for now: it remembers the choice in component state only,
 * and does not translate the site. Closes on outside tap, Escape and selection; arrow keys move between options.
 */
export default function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<Language>(languages[0]);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (root.current && !root.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    root.current?.querySelector<HTMLElement>("[aria-selected='true']")?.focus();
    return () => document.removeEventListener("pointerdown", onPointer);
  }, [open]);

  const close = (refocus: boolean) => {
    setOpen(false);
    if (refocus) trigger.current?.focus();
  };

  const onMenuKey = (e: React.KeyboardEvent<HTMLUListElement>) => {
    if (e.key === "Escape") {
      e.preventDefault();
      close(true);
      return;
    }
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp" && e.key !== "Home" && e.key !== "End") return;
    e.preventDefault();
    const items = Array.from(e.currentTarget.querySelectorAll<HTMLElement>("[role='option']"));
    const i = items.indexOf(document.activeElement as HTMLElement);
    const next =
      e.key === "Home" ? 0 : e.key === "End" ? items.length - 1 : (i + (e.key === "ArrowDown" ? 1 : -1) + items.length) % items.length;
    items[next]?.focus();
  };

  return (
    <div className="lang" ref={root}>
      <button
        ref={trigger}
        type="button"
        className="lang__btn"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={`Language and region: ${current.region}`}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown" && !open) {
            e.preventDefault();
            setOpen(true);
          }
        }}
      >
        <Flag code={current.code} className="flag" />
        <ChevronDownIcon className="lang__caret" />
      </button>

      <ul id={menuId} className="lang__menu" role="listbox" aria-label="Choose language" hidden={!open} onKeyDown={onMenuKey}>
        {languages.map((l) => {
          const selected = l.code === current.code;
          return (
            <li
              key={l.code}
              role="option"
              aria-selected={selected}
              tabIndex={-1}
              className="lang__opt"
              onClick={() => {
                setCurrent(l);
                close(true);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setCurrent(l);
                  close(true);
                }
              }}
            >
              <Flag code={l.code} className="flag" />
              <span className="lang__text">
                <strong>{l.region}</strong>
                <span lang={l.lang}>{l.native}</span>
              </span>
              {selected && <CheckIcon className="lang__tick" />}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
