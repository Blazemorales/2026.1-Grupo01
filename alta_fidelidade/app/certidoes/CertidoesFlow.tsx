"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  AlertCircle,
  CheckCircle2,
  Download,
  Loader2,
  ReceiptText,
} from "lucide-react";
import { Button } from "../components/ui/Button";
import { ChevronLeft, HomeIcon } from "../components/portal/icons";
import { AlertBanner } from "../imposto-de-renda/components/AlertBanner";
import { Breadcrumb, type Crumb } from "../imposto-de-renda/components/Breadcrumb";
import { LoadingDialog } from "../imposto-de-renda/components/LoadingDialog";

type Step = "loading" | "consulta";
type SituacaoFiscal = "regular" | "pendente";
type DownloadState = "idle" | "loading" | "success";

const LABELS = {
  inicio: "In\u00edcio",
  titulo: "Certid\u00f5es e Situa\u00e7\u00e3o Fiscal",
  voltarInicio: "Voltar ao in\u00edcio",
  emitindoCnd: "Emitir CND",
  consultando: "Consultando situa\u00e7\u00e3o fiscal...",
  comPendencias: "Com pend\u00eancias",
  situacaoFiscal: "Situa\u00e7\u00e3o Fiscal",
  pendenteBadge: "COM PEND\u00caNCIAS",
  cndDisponivel: "Certid\u00e3o dispon\u00edvel para emiss\u00e3o.",
  semPendencias:
    "N\u00e3o h\u00e1 pend\u00eancias impeditivas para a emiss\u00e3o da CND.",
  baixando: "Baixando Certid\u00e3o...",
  baixar: "Baixar Certid\u00e3o (CND)",
  salva: "Certid\u00e3o salva localmente.",
  bloqueio: "N\u00e3o \u00e9 poss\u00edvel emitir a CND neste momento.",
  pendencia:
    "Pend\u00eancia impeditiva: DARF em aberto referente ao Imposto de Renda Pessoa F\u00edsica 2024, vencido em 31/05/2025.",
  regularize:
    "Regularize a pend\u00eancia e consulte novamente para liberar a emiss\u00e3o da certid\u00e3o negativa de d\u00e9bitos.",
};

const CONTRIBUINTE = {
  nome: "Maria Silva Santos",
  cpf: "123.456.789-09",
};

export function CertidoesFlow() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("loading");
  const [situacao, setSituacao] = useState<SituacaoFiscal>("regular");
  const [downloadState, setDownloadState] = useState<DownloadState>("idle");

  useEffect(() => {
    if (step !== "loading") return;
    const timer = setTimeout(() => setStep("consulta"), 1200);
    return () => clearTimeout(timer);
  }, [step]);

  useEffect(() => {
    if (downloadState !== "loading") return;
    const timer = setTimeout(() => setDownloadState("success"), 1500);
    return () => clearTimeout(timer);
  }, [downloadState]);

  function simularSituacao(nextSituacao: SituacaoFiscal) {
    setSituacao(nextSituacao);
    setDownloadState("idle");
  }

  function baixarCertidao() {
    setDownloadState("loading");
  }

  const trail: Crumb[] = [
    { label: LABELS.inicio, onClick: () => router.push("/") },
    { label: LABELS.titulo, onClick: () => router.push("/") },
    { label: LABELS.emitindoCnd },
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
      <Link
        href="/"
        className="mx-auto mb-4 flex w-fit items-center gap-1.5 text-sm font-medium text-brand transition-colors hover:text-brand-dark"
      >
        <ChevronLeft className="h-4 w-4" /> {LABELS.voltarInicio}
      </Link>

      <Breadcrumb trail={trail} />

      <div className="flex items-center justify-between gap-4 border-b border-line pb-4">
        <h1 className="flex items-center gap-2 text-2xl font-extrabold tracking-tight text-brand-darker">
          <span className="h-6 w-1.5 rounded-full bg-accent" />
          {LABELS.titulo}
        </h1>
        <Button asChild variant="ghost" className="border border-line bg-white">
          <Link href="/">
            <HomeIcon className="h-4 w-4" /> Sair
          </Link>
        </Button>
      </div>

      <div className="mt-6">
        {step === "consulta" && (
          <ConsultaScreen
            situacao={situacao}
            downloadState={downloadState}
            onSituacaoChange={simularSituacao}
            onDownload={baixarCertidao}
            onBack={() => router.push("/")}
          />
        )}
      </div>

      {step === "loading" && (
        <LoadingDialog
          message={LABELS.consultando}
          onCancel={() => router.push("/")}
        />
      )}
    </div>
  );
}

function ConsultaScreen({
  situacao,
  downloadState,
  onSituacaoChange,
  onDownload,
  onBack,
}: {
  situacao: SituacaoFiscal;
  downloadState: DownloadState;
  onSituacaoChange: (situacao: SituacaoFiscal) => void;
  onDownload: () => void;
  onBack: () => void;
}) {
  const regular = situacao === "regular";

  return (
    <div className="flex flex-col gap-5">
      <section className="rounded-2xl border border-line bg-white p-5 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-brand">
              <span className="h-4 w-1.5 rounded-full bg-accent" />
              Dados cadastrais
            </h2>
            <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
              <InfoRow label="Nome" value={CONTRIBUINTE.nome} />
              <InfoRow label="CPF" value={CONTRIBUINTE.cpf} />
            </dl>
          </div>

          <div className="rounded-xl border border-line bg-surface p-1">
            <button
              type="button"
              aria-pressed={regular}
              onClick={() => onSituacaoChange("regular")}
              className={[
                "h-9 rounded-lg px-3 text-xs font-bold transition-colors",
                regular ? "bg-success text-white" : "text-slate-600 hover:bg-white",
              ].join(" ")}
            >
              Regular
            </button>
            <button
              type="button"
              aria-pressed={!regular}
              onClick={() => onSituacaoChange("pendente")}
              className={[
                "h-9 rounded-lg px-3 text-xs font-bold transition-colors",
                !regular ? "bg-accent text-white" : "text-slate-600 hover:bg-white",
              ].join(" ")}
            >
              {LABELS.comPendencias}
            </button>
          </div>
        </div>

        <div className="mt-5 rounded-xl border border-line p-4">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
            {LABELS.situacaoFiscal}
          </p>
          <p
            className={[
              "mt-2 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-extrabold",
              regular ? "bg-success-soft text-emerald-900" : "bg-warning-soft text-amber-900",
            ].join(" ")}
          >
            {regular ? (
              <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
            ) : (
              <AlertCircle className="h-4 w-4" aria-hidden="true" />
            )}
            {regular ? "REGULAR" : LABELS.pendenteBadge}
          </p>
        </div>
      </section>

      {regular ? (
        <section className="rounded-2xl border border-line bg-white p-5 shadow-sm">
          <AlertBanner tone="success" title={LABELS.cndDisponivel}>
            {LABELS.semPendencias}
          </AlertBanner>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <Button variant="ghost" onClick={onBack}>
              <ChevronLeft className="h-4 w-4" /> Voltar
            </Button>
            <Button
              variant="accent"
              onClick={onDownload}
              disabled={downloadState === "loading"}
              aria-live="polite"
            >
              {downloadState === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  {LABELS.baixando}
                </>
              ) : (
                <>
                  <Download className="h-4 w-4" aria-hidden="true" />
                  {LABELS.baixar}
                </>
              )}
            </Button>
          </div>

          {downloadState === "success" && (
            <p
              role="status"
              className="mt-4 rounded-xl bg-success-soft px-4 py-3 text-sm font-semibold text-emerald-900"
            >
              {LABELS.salva}
            </p>
          )}
        </section>
      ) : (
        <section className="rounded-2xl border border-warning/40 bg-white p-5 shadow-sm">
          <AlertBanner title={LABELS.bloqueio}>
            {LABELS.pendencia}
          </AlertBanner>

          <div className="mt-5 rounded-xl bg-warning-soft p-4 text-sm text-amber-950">
            {LABELS.regularize}
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <Button variant="ghost" onClick={onBack}>
              <ChevronLeft className="h-4 w-4" /> Voltar
            </Button>
            <Button asChild variant="accent">
              <Link href="/imposto-de-renda">
                <ReceiptText className="h-4 w-4" aria-hidden="true" />
                Emitir DARF
              </Link>
            </Button>
          </div>
        </section>
      )}
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-slate-500">{label}</dt>
      <dd className="mt-1 font-semibold text-slate-800">{value}</dd>
    </div>
  );
}
