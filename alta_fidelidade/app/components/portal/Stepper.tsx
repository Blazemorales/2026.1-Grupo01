import { CheckIcon } from "./icons";

interface StepperProps {
  steps: string[];
  /** 1-based index of the current step. */
  current: number;
}

/**
 * Numbered progress indicator from the calendar screen ("fase 3"): completed
 * nodes are filled, the active node is highlighted, upcoming nodes are muted.
 */
export function Stepper({ steps, current }: StepperProps) {
  return (
    <ol className="flex items-center" aria-label="Progresso do agendamento">
      {steps.map((label, i) => {
        const n = i + 1;
        const done = n < current;
        const active = n === current;
        return (
          <li key={label} className="flex flex-1 items-center last:flex-none">
            <div className="flex flex-col items-center gap-1.5">
              <span
                aria-current={active ? "step" : undefined}
                className={[
                  "grid h-9 w-9 place-items-center rounded-full text-sm font-bold transition-colors",
                  done && "bg-success text-white",
                  active && "bg-brand text-white ring-4 ring-brand-soft",
                  !done && !active && "bg-slate-200 text-slate-500",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {done ? <CheckIcon className="h-4 w-4" /> : n}
              </span>
              <span
                className={[
                  "max-w-[7rem] text-center text-xs font-medium",
                  active ? "text-brand" : "text-slate-500",
                ].join(" ")}
              >
                {label}
              </span>
            </div>
            {n < steps.length && (
              <span
                className={["mx-2 mb-5 h-0.5 flex-1 rounded", n < current ? "bg-success" : "bg-slate-200"].join(" ")}
              />
            )}
          </li>
        );
      })}
    </ol>
  );
}
