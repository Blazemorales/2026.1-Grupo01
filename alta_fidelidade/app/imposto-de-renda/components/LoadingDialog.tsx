"use client";

import { useEffect, useRef } from "react";
import { SpinnerIcon, WifiIcon } from "../../components/portal/icons";

interface LoadingDialogProps {
  /** Main message, e.g. "Dados em processamento…" or "Aguardando pagamento." */
  message: string;
  onCancel: () => void;
}

/**
 * Centered modal with a spinner and a Cancelar action — the "Dados em
 * processamento… Aguarde" dialog from the prototype, including the
 * "Conectado à Internet" connection status drawn at the bottom.
 */
export function LoadingDialog({ message, onCancel }: LoadingDialogProps) {
  const cancelRef = useRef<HTMLButtonElement>(null);

  // Move focus into the dialog and let Esc cancel, for keyboard users.
  useEffect(() => {
    cancelRef.current?.focus();
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onCancel();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onCancel]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={message}
      className="fixed inset-0 z-50 grid place-items-center bg-brand-darker/40 p-4 backdrop-blur-sm"
    >
      <div className="w-full max-w-sm rounded-2xl border border-line bg-white p-8 text-center shadow-xl">
        <SpinnerIcon className="mx-auto h-12 w-12 animate-spin text-brand" />
        <p className="mt-5 text-base font-semibold text-slate-800">{message}</p>
        <p className="mt-1 text-sm text-slate-500">Aguarde um instante.</p>

        <button
          ref={cancelRef}
          type="button"
          onClick={onCancel}
          className="mt-6 inline-flex h-10 items-center justify-center rounded-full border border-line px-5 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-100"
        >
          Cancelar
        </button>

        <p className="mt-6 flex items-center justify-center gap-2 text-xs font-medium text-success">
          <WifiIcon className="h-4 w-4" />
          Status: conectado à Internet
        </p>
      </div>
    </div>
  );
}
