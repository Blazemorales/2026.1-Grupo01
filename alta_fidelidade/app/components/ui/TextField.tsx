import type { InputHTMLAttributes } from "react";
import { useId } from "react";

interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "id"> {
  label: string;
  hint?: string;
  error?: string;
}

/** Labelled text input with the prototype's rounded, bordered field style. */
export function TextField({ label, hint, error, className = "", ...props }: TextFieldProps) {
  const id = useId();
  const describedBy = error ? `${id}-error` : hint ? `${id}-hint` : undefined;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-slate-700">
        {label}
      </label>
      <input
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy}
        className={[
          "h-12 rounded-xl border bg-white px-4 text-base text-slate-900 outline-none",
          "placeholder:text-slate-400 transition-shadow",
          error
            ? "border-accent focus:ring-2 focus:ring-accent/40"
            : "border-line focus:border-brand focus:ring-2 focus:ring-brand/30",
          className,
        ].join(" ")}
        {...props}
      />
      {error ? (
        <span id={`${id}-error`} className="text-xs font-medium text-accent-dark">
          {error}
        </span>
      ) : hint ? (
        <span id={`${id}-hint`} className="text-xs text-slate-500">
          {hint}
        </span>
      ) : null}
    </div>
  );
}
