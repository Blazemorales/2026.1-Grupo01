"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "./icons";

const WEEKDAYS = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];
const MONTHS = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
];

/**
 * Demo "today" is fixed to the prototype's reference date (08/06/2026) so the
 * available dates stay stable and match the drawing regardless of the clock.
 */
const TODAY = new Date(2026, 5, 8);

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

/** Available = today or later, on a weekday (Mon–Fri). */
function isAvailable(date: Date) {
  const weekday = date.getDay();
  const notPast = date.getTime() >= new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate()).getTime();
  return notPast && weekday >= 1 && weekday <= 5;
}

interface CalendarProps {
  selected: Date | null;
  onSelect: (date: Date) => void;
}

export function Calendar({ selected, onSelect }: CalendarProps) {
  const [view, setView] = useState({ year: TODAY.getFullYear(), month: TODAY.getMonth() });

  const firstWeekday = new Date(view.year, view.month, 1).getDay();
  const daysInMonth = new Date(view.year, view.month + 1, 0).getDate();
  const cells: (number | null)[] = [
    ...Array.from({ length: firstWeekday }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  function shiftMonth(delta: number) {
    setView((v) => {
      const m = v.month + delta;
      return { year: v.year + Math.floor(m / 12), month: ((m % 12) + 12) % 12 };
    });
  }

  return (
    <div className="rounded-2xl border border-line bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <button
          type="button"
          onClick={() => shiftMonth(-1)}
          aria-label="Mês anterior"
          className="grid h-9 w-9 place-items-center rounded-lg text-indigo-mark transition-colors hover:bg-brand-soft"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <h3 className="text-base font-bold text-brand-darker">
          {MONTHS[view.month]} {view.year}
        </h3>
        <button
          type="button"
          onClick={() => shiftMonth(1)}
          aria-label="Próximo mês"
          className="grid h-9 w-9 place-items-center rounded-lg text-indigo-mark transition-colors hover:bg-brand-soft"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center">
        {WEEKDAYS.map((w) => (
          <span key={w} className="py-1 text-xs font-semibold text-slate-400">
            {w}
          </span>
        ))}

        {cells.map((day, i) => {
          if (day === null) return <span key={`empty-${i}`} />;
          const date = new Date(view.year, view.month, day);
          const available = isAvailable(date);
          const isSelected = selected && isSameDay(selected, date);
          const isToday = isSameDay(TODAY, date);

          return (
            <button
              key={day}
              type="button"
              disabled={!available}
              aria-pressed={Boolean(isSelected)}
              aria-label={`${day} de ${MONTHS[view.month]}${available ? "" : " (indisponível)"}`}
              onClick={() => onSelect(date)}
              className={[
                "mx-auto grid h-9 w-9 place-items-center rounded-full text-sm transition-colors",
                isSelected
                  ? "bg-brand font-bold text-white"
                  : available
                    ? "bg-success-soft font-medium text-success hover:bg-success hover:text-white"
                    : "text-slate-300",
                isToday && !isSelected ? "ring-2 ring-brand" : "",
              ].join(" ")}
            >
              {day}
            </button>
          );
        })}
      </div>

      <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-500">
        <span className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-success-soft ring-1 ring-success/40" /> Disponível
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-brand" /> Selecionado
        </span>
      </div>
    </div>
  );
}
