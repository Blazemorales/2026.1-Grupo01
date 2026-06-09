interface Tab<T extends string> {
  value: T;
  label: string;
}

interface SegmentedTabsProps<T extends string> {
  tabs: Tab<T>[];
  value: T;
  onChange: (value: T) => void;
  ariaLabel: string;
}

/**
 * The "Pessoa Física / Pessoa Jurídica" pill selector. The active tab is
 * filled with the accent colour, exactly as highlighted in the prototype.
 */
export function SegmentedTabs<T extends string>({ tabs, value, onChange, ariaLabel }: SegmentedTabsProps<T>) {
  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      className="grid grid-cols-2 gap-2 rounded-full bg-white p-1.5 shadow-sm ring-1 ring-line sm:inline-grid sm:auto-cols-fr sm:grid-flow-col"
    >
      {tabs.map((tab) => {
        const active = tab.value === value;
        return (
          <button
            key={tab.value}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(tab.value)}
            className={[
              "h-11 rounded-full px-6 text-sm font-semibold transition-colors sm:min-w-[170px]",
              active ? "bg-accent text-white shadow-sm" : "text-slate-600 hover:bg-slate-100",
            ].join(" ")}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
