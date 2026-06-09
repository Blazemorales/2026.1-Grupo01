"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ChevronRight } from "../portal/icons";

interface SelectProps {
  label: string;
  placeholder?: string;
  value: string | null;
  options: readonly string[];
  onChange: (value: string) => void;
}

/**
 * Accessible dropdown reproducing the "unidade" list from the prototype's
 * "soltos" screen (Gama, Asa Sul, Asa Norte, Taguatinga).
 */
export function Select({ label, placeholder = "Selecione", value, options, onChange }: SelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    if (!open) return;
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <div className="flex flex-col gap-1.5" ref={ref}>
      <span id={`${id}-label`} className="text-sm font-semibold text-slate-700">
        {label}
      </span>
      <div className="relative">
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-labelledby={`${id}-label`}
          onClick={() => setOpen((o) => !o)}
          className="flex h-12 w-full items-center justify-between rounded-xl border border-line bg-white px-4 text-left transition-colors hover:border-brand/50"
        >
          <span className={value ? "text-slate-900" : "text-slate-400"}>{value ?? placeholder}</span>
          <ChevronRight className={`h-4 w-4 text-slate-500 transition-transform ${open ? "rotate-90" : ""}`} />
        </button>

        {open && (
          <ul
            role="listbox"
            aria-labelledby={`${id}-label`}
            className="absolute z-20 mt-2 w-full overflow-hidden rounded-xl border border-line bg-white shadow-lg"
          >
            {options.map((opt) => {
              const selected = opt === value;
              return (
                <li key={opt} role="option" aria-selected={selected}>
                  <button
                    type="button"
                    onClick={() => {
                      onChange(opt);
                      setOpen(false);
                    }}
                    className={[
                      "flex w-full items-center justify-between px-4 py-3 text-left text-sm transition-colors",
                      selected ? "bg-brand-soft font-semibold text-brand" : "text-slate-700 hover:bg-slate-50",
                    ].join(" ")}
                  >
                    {opt}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
