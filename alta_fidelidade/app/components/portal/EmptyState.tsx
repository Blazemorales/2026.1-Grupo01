import { AlertTriangle } from "./icons";

interface EmptyStateProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

/** Warning empty-state from the "agendamentos" screen ("Sem agendamentos…"). */
export function EmptyState({ title, description, children }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-2xl border border-line bg-white px-6 py-12 text-center shadow-sm">
      <span className="grid h-16 w-16 place-items-center rounded-full bg-warning-soft text-warning">
        <AlertTriangle className="h-9 w-9" />
      </span>
      <div className="space-y-1">
        <h2 className="text-lg font-bold text-slate-800">{title}</h2>
        {description && <p className="text-sm text-slate-500">{description}</p>}
      </div>
      {children}
    </div>
  );
}
