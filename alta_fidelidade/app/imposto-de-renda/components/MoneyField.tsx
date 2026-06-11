"use client";

import { useId } from "react";

interface MoneyFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

/**
 * "R$" money input from the declaration form. Same rounded/bordered style as
 * the portal's TextField, with a fixed currency prefix and right-aligned value.
 */
export function MoneyField({ label, value, onChange, error }: MoneyFieldProps) {
  const id = useId();
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-slate-700">
        {label}
      </label>
      <div
        className={[
          "flex h-12 items-center overflow-hidden rounded-xl border bg-white transition-shadow focus-within:ring-2",
          error
            ? "border-accent focus-within:ring-accent/40"
            : "border-line focus-within:border-brand focus-within:ring-brand/30",
        ].join(" ")}
      >
        <span className="grid h-full place-items-center border-r border-line bg-surface px-3 text-sm font-semibold text-slate-500">
          R$
        </span>
        <input
          id={id}
          inputMode="numeric"
          autoComplete="off"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-full w-full bg-transparent px-3 text-right text-base text-slate-900 outline-none"
        />
      </div>
      {error && (
        <span id={`${id}-error`} className="text-xs font-medium text-accent-dark">
          {error}
        </span>
      )}
    </div>
  );
}
