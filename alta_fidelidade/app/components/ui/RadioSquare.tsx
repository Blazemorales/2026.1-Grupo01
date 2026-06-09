import { CheckIcon } from "../portal/icons";

interface Option<T extends string> {
  value: T;
  label: string;
}

interface RadioSquareProps<T extends string> {
  legend: string;
  name: string;
  value: T | null;
  options: Option<T>[];
  onChange: (value: T) => void;
}

/**
 * Exclusive choice rendered as square boxes — mirrors the prototype's
 * "O atendimento será para [ ] Mim  [ ] Outro" control.
 */
export function RadioSquare<T extends string>({
  legend,
  name,
  value,
  options,
  onChange,
}: RadioSquareProps<T>) {
  return (
    <fieldset className="flex flex-col gap-2">
      <legend className="text-sm font-semibold text-slate-700">{legend}</legend>
      <div className="flex flex-wrap gap-3">
        {options.map((opt) => {
          const checked = value === opt.value;
          return (
            <label
              key={opt.value}
              className={[
                "flex cursor-pointer items-center gap-2 rounded-xl border px-4 py-2.5 transition-colors",
                checked ? "border-brand bg-brand-soft" : "border-line bg-white hover:border-brand/50",
              ].join(" ")}
            >
              <input
                type="radio"
                name={name}
                value={opt.value}
                checked={checked}
                onChange={() => onChange(opt.value)}
                className="sr-only"
              />
              <span
                className={[
                  "grid h-5 w-5 place-items-center rounded-md border-2 transition-colors",
                  checked ? "border-brand bg-brand text-white" : "border-slate-400 bg-white",
                ].join(" ")}
                aria-hidden
              >
                {checked && <CheckIcon className="h-3.5 w-3.5" />}
              </span>
              <span className="text-sm font-medium text-slate-700">{opt.label}</span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
