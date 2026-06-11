"use client";

import { BOLETO_OPTIONS, BOLETO_VALOR, type BoletoMetodo } from "@/lib/imposto";
import { formatBRL } from "@/lib/masks";
import { DownloadIcon, FileIcon, PixIcon } from "../../components/portal/icons";

const ICONS: Record<BoletoMetodo, typeof FileIcon> = {
  pdf: FileIcon,
  imagem: DownloadIcon,
  pix: PixIcon,
};

interface BoletoCardProps {
  onSelect: (metodo: BoletoMetodo) => void;
  onCancel: () => void;
  /** When true, the actions are shown but disabled (e.g. before declaring). */
  locked?: boolean;
}

/**
 * "Boleto" card from the prototype: shows the amount due and the three ways to
 * obtain/pay it (PDF, Imagem, PIX), plus a Cancelar action.
 */
export function BoletoCard({ onSelect, onCancel, locked = false }: BoletoCardProps) {
  return (
    <section className="flex flex-col rounded-2xl border border-line bg-white p-5 shadow-sm">
      <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-brand">
        <span className="h-4 w-1.5 rounded-full bg-accent" />
        Boleto
      </h2>

      <div className="mt-4 flex items-baseline justify-between rounded-xl bg-surface px-4 py-3">
        <span className="text-sm text-slate-500">Valor a pagar</span>
        <span className="text-lg font-extrabold text-brand-darker">{formatBRL(BOLETO_VALOR)}</span>
      </div>

      <p className="mt-4 text-sm text-slate-600">
        {locked
          ? "Conclua a declaração para liberar o boleto."
          : "Escolha como deseja baixar ou pagar o boleto:"}
      </p>

      <div className="mt-3 grid grid-cols-3 gap-2.5">
        {BOLETO_OPTIONS.map((opt) => {
          const Icon = ICONS[opt.id];
          return (
            <button
              key={opt.id}
              type="button"
              disabled={locked}
              title={opt.hint}
              onClick={() => onSelect(opt.id)}
              className="flex flex-col items-center gap-1.5 rounded-xl border border-line bg-white px-2 py-3 text-xs font-semibold text-slate-700 transition-colors hover:border-brand hover:bg-brand-soft hover:text-brand disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-line disabled:hover:bg-white disabled:hover:text-slate-700"
            >
              <Icon className="h-5 w-5" />
              {opt.label}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={onCancel}
        className="mt-4 self-start text-sm font-medium text-slate-500 transition-colors hover:text-accent-dark"
      >
        Cancelar
      </button>
    </section>
  );
}
