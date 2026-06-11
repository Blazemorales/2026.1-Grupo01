"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "../components/ui/Button";
import { TextField } from "../components/ui/TextField";
import {
  ChevronLeft,
  HomeIcon,
  PlusIcon,
  SpinnerIcon,
  TrashIcon,
  UploadIcon,
} from "../components/portal/icons";
import { Breadcrumb, type Crumb } from "./components/Breadcrumb";
import { AlertBanner } from "./components/AlertBanner";
import { MoneyField } from "./components/MoneyField";
import { LoadingDialog } from "./components/LoadingDialog";
import { BoletoCard } from "./components/BoletoCard";
import {
  DECLARACAO_SECTIONS,
  MONEY_FIELD_IDS,
  PENDENCIA_IR,
  type BoletoMetodo,
} from "@/lib/imposto";
import {
  isValidCPF,
  isValidDate,
  isValidTituloEleitor,
  maskCPF,
  maskDate,
  maskMoney,
  maskTituloEleitor,
} from "@/lib/masks";

type Step =
  | "pendencias"
  | "declaracao"
  | "enviada"
  | "aguardando"
  | "comprovante"
  | "concluido";

interface Dependente {
  cpf: string;
  nascimento: string;
}

interface Errors {
  nome?: string;
  cpf?: string;
  titulo?: string;
  dependentes?: Record<number, { cpf?: string; nascimento?: string }>;
}

const emptyMoney = () =>
  Object.fromEntries(MONEY_FIELD_IDS.map((id) => [id, "0,00"])) as Record<
    string,
    string
  >;

export function ImpostoFlow({ start }: { start: "pendencias" | "declaracao" }) {
  const router = useRouter();

  const [step, setStep] = useState<Step>(start);
  // Full-screen modal shown while "processing"; null when hidden.
  const [overlay, setOverlay] = useState<string | null>(
    start === "pendencias" ? "Dados em processamento…" : null,
  );

  // Declaration form state.
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [titulo, setTitulo] = useState("");
  const [dependentes, setDependentes] = useState<Dependente[]>([]);
  const [money, setMoney] = useState<Record<string, string>>(emptyMoney);
  const [errors, setErrors] = useState<Errors>({});

  const [metodo, setMetodo] = useState<BoletoMetodo | null>(null);
  const [comprovante, setComprovante] = useState<string | null>(null);
  const [acompanhar, setAcompanhar] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  // "Consultar minhas pendências": simulate the processing dialog, then reveal.
  useEffect(() => {
    if (start !== "pendencias") return;
    const t = setTimeout(() => {
      setOverlay(null);
      setStep("pendencias");
    }, 1800);
    return () => clearTimeout(t);
  }, [start]);

  // "Aguardando pagamento": auto-confirm the payment after a short wait.
  useEffect(() => {
    if (step !== "aguardando") return;
    const t = setTimeout(() => setStep("comprovante"), 2400);
    return () => clearTimeout(t);
  }, [step]);

  const goHome = () => router.push("/");

  // ---- Declaration validation (Protótipo 1 rules) -------------------------
  function validate(): boolean {
    const next: Errors = {};
    if (nome.trim().length < 3)
      next.nome = "Informe o nome completo do contribuinte.";
    if (!isValidCPF(cpf)) next.cpf = "Informe um CPF válido.";
    if (!isValidTituloEleitor(titulo))
      next.titulo = "Informe o título de eleitor (12 dígitos).";

    const depErrors: Record<number, { cpf?: string; nascimento?: string }> = {};
    dependentes.forEach((dep, i) => {
      const touched = dep.cpf.trim() !== "" || dep.nascimento.trim() !== "";
      if (!touched) return;
      const e: { cpf?: string; nascimento?: string } = {};
      if (!isValidCPF(dep.cpf)) e.cpf = "CPF inválido.";
      if (!isValidDate(dep.nascimento)) e.nascimento = "Data inválida.";
      if (e.cpf || e.nascimento) depErrors[i] = e;
    });
    if (Object.keys(depErrors).length) next.dependentes = depErrors;

    setErrors(next);
    return !next.nome && !next.cpf && !next.titulo && !next.dependentes;
  }

  function enviarDeclaracao() {
    if (!validate()) {
      // Surface the first error to assistive tech / scroll into view.
      document.querySelector('[aria-invalid="true"]')?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      return;
    }
    setOverlay("Enviando declaração…");
    setTimeout(() => {
      setOverlay(null);
      setStep("enviada");
    }, 1600);
  }

  function escolherBoleto(m: BoletoMetodo) {
    setMetodo(m);
    setStep("aguardando");
  }

  function confirmarComprovante() {
    setOverlay("Validando comprovante…");
    setTimeout(() => {
      setOverlay(null);
      setStep("concluido");
    }, 1500);
  }

  function addDependente() {
    setDependentes((d) => [...d, { cpf: "", nascimento: "" }]);
  }
  function removeDependente(i: number) {
    setDependentes((d) => d.filter((_, idx) => idx !== i));
  }
  function updateDependente(i: number, patch: Partial<Dependente>) {
    setDependentes((d) =>
      d.map((dep, idx) => (idx === i ? { ...dep, ...patch } : dep)),
    );
  }

  // Clickable navigation trail. "Início"/"Consultar…" go home; "Meus Dados"
  // returns to the pendências screen; the current page is the last (inert) crumb.
  const voltarMeusDados = () => {
    setOverlay(null);
    setStep("pendencias");
  };
  const trail: Crumb[] = [
    { label: "Início", onClick: goHome },
    { label: "Consultar meu CPF/CNPJ", onClick: goHome },
    ...(step === "declaracao"
      ? [
          { label: "Meus Dados", onClick: voltarMeusDados },
          { label: "Declaração" },
        ]
      : [{ label: "Meus Dados" }]),
  ];

  // Top "Voltar" button — steps back through the flow to the previous screen,
  // or to the home page when there is no earlier screen.
  const voltaParaInicio =
    step === "pendencias" ||
    step === "concluido" ||
    (step === "declaracao" && start === "declaracao");
  function voltar() {
    setOverlay(null);
    switch (step) {
      case "declaracao":
        return start === "declaracao" ? goHome() : setStep("pendencias");
      case "enviada":
        return setStep("declaracao");
      case "aguardando":
      case "comprovante":
        return setStep("enviada");
      case "pendencias":
      case "concluido":
      default:
        return goHome();
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
      <button
        type="button"
        onClick={voltar}
        className="mx-auto mb-4 flex w-fit items-center gap-1.5 text-sm font-medium text-brand transition-colors hover:text-brand-dark"
      >
        <ChevronLeft className="h-4 w-4" />{" "}
        {voltaParaInicio ? "Voltar ao início" : "Voltar"}
      </button>

      <Breadcrumb trail={trail} />

      <PanelHeader
        title={step === "declaracao" ? "Declaração" : "Meus Dados"}
        onSair={goHome}
      />

      <div className="mt-6">
        {step === "pendencias" && (
          <PendenciasScreen onDeclarar={() => setStep("declaracao")} />
        )}

        {step === "declaracao" && (
          <DeclaracaoScreen
            nome={nome}
            setNome={setNome}
            cpf={cpf}
            setCpf={(v) => setCpf(maskCPF(v))}
            titulo={titulo}
            setTitulo={(v) => setTitulo(maskTituloEleitor(v))}
            dependentes={dependentes}
            addDependente={addDependente}
            removeDependente={removeDependente}
            updateDependente={updateDependente}
            money={money}
            setMoney={(id, v) =>
              setMoney((m) => ({ ...m, [id]: maskMoney(v) }))
            }
            errors={errors}
            onBack={
              start === "declaracao" ? goHome : () => setStep("pendencias")
            }
            onSubmit={enviarDeclaracao}
          />
        )}

        {step === "enviada" && (
          <EnviadaScreen
            acompanhar={acompanhar}
            onAcompanhar={() => setAcompanhar(true)}
            onSelectBoleto={escolherBoleto}
            onSair={goHome}
          />
        )}

        {step === "aguardando" && (
          <AguardandoScreen
            metodo={metodo!}
            onCancel={() => setStep("enviada")}
            onSair={goHome}
          />
        )}

        {step === "comprovante" && (
          <ComprovanteScreen
            comprovante={comprovante}
            fileRef={fileRef}
            onPick={() => fileRef.current?.click()}
            onFile={(name) => setComprovante(name)}
            onConfirm={confirmarComprovante}
            onCancel={() => setStep("enviada")}
          />
        )}

        {step === "concluido" && <ConcluidoScreen onSair={goHome} />}
      </div>

      {overlay && <LoadingDialog message={overlay} onCancel={goHome} />}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Screens                                                                     */
/* -------------------------------------------------------------------------- */

function PanelHeader({ title, onSair }: { title: string; onSair: () => void }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-line pb-4">
      <h1 className="flex items-center gap-2 text-2xl font-extrabold tracking-tight text-brand-darker">
        <span className="h-6 w-1.5 rounded-full bg-accent" />
        {title}
      </h1>
      <button
        type="button"
        onClick={onSair}
        className="inline-flex h-9 items-center gap-1.5 rounded-full border border-line px-4 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-100"
      >
        Sair
      </button>
    </div>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-line bg-white p-5 shadow-sm">
      {children}
    </section>
  );
}

function PendenciasScreen({ onDeclarar }: { onDeclarar: () => void }) {
  return (
    <div className="flex flex-col gap-5">
      <AlertBanner title="Você possui pendências!">
        Resolva os itens abaixo para regularizar sua situação cadastral.
      </AlertBanner>

      <div className="grid gap-5 md:grid-cols-2">
        <Card>
          <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-accent-dark">
            <span className="h-4 w-1.5 rounded-full bg-accent" />
            Pendentes
          </h2>
          <p className="mt-3 font-semibold text-slate-800">
            {PENDENCIA_IR.title}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-slate-600">
            {PENDENCIA_IR.description}
          </p>
          <Button variant="accent" className="mt-4" onClick={onDeclarar}>
            Declarar agora
          </Button>
        </Card>

        <BoletoCard locked onSelect={() => {}} onCancel={() => {}} />
      </div>
    </div>
  );
}

interface DeclaracaoScreenProps {
  nome: string;
  setNome: (v: string) => void;
  cpf: string;
  setCpf: (v: string) => void;
  titulo: string;
  setTitulo: (v: string) => void;
  dependentes: Dependente[];
  addDependente: () => void;
  removeDependente: (i: number) => void;
  updateDependente: (i: number, patch: Partial<Dependente>) => void;
  money: Record<string, string>;
  setMoney: (id: string, v: string) => void;
  errors: Errors;
  onBack: () => void;
  onSubmit: () => void;
}

function DeclaracaoScreen(p: DeclaracaoScreenProps) {
  return (
    <div className="flex flex-col gap-6">
      {/* Identificação */}
      <Card>
        <SectionTitle>Identificação do contribuinte</SectionTitle>
        <div className="mt-4 flex flex-col gap-4">
          <TextField
            label="Nome do contribuinte"
            placeholder="Nome completo"
            value={p.nome}
            onChange={(e) => p.setNome(e.target.value)}
            error={p.errors.nome}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <TextField
              label="CPF do contribuinte"
              inputMode="numeric"
              placeholder="999.999.999-99"
              value={p.cpf}
              onChange={(e) => p.setCpf(e.target.value)}
              error={p.errors.cpf}
            />
            <TextField
              label="Número do título de eleitor"
              inputMode="numeric"
              placeholder="0000 0000 0000"
              value={p.titulo}
              onChange={(e) => p.setTitulo(e.target.value)}
              error={p.errors.titulo}
            />
          </div>
        </div>
      </Card>

      {/* Dependentes */}
      <Card>
        <div className="flex items-center justify-between">
          <SectionTitle>Dependentes</SectionTitle>
          <button
            type="button"
            onClick={p.addDependente}
            className="inline-flex h-9 items-center gap-1.5 rounded-full border border-brand px-3.5 text-sm font-semibold text-brand transition-colors hover:bg-brand-soft"
          >
            <PlusIcon className="h-4 w-4" /> Adicionar
          </button>
        </div>

        {p.dependentes.length === 0 ? (
          <p className="mt-3 text-sm text-slate-500">
            Nenhum dependente informado. Use “Adicionar” se possuir dependentes.
          </p>
        ) : (
          <ul className="mt-4 flex flex-col gap-4">
            {p.dependentes.map((dep, i) => {
              const depErr = p.errors.dependentes?.[i];
              return (
                <li
                  key={i}
                  className="rounded-xl border border-line bg-surface/60 p-4"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-700">
                      Dependente {i + 1}
                    </span>
                    <button
                      type="button"
                      onClick={() => p.removeDependente(i)}
                      aria-label={`Remover dependente ${i + 1}`}
                      className="grid h-8 w-8 place-items-center rounded-lg text-slate-400 transition-colors hover:bg-accent-soft hover:text-accent-dark"
                    >
                      <TrashIcon className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <TextField
                      label="CPF"
                      inputMode="numeric"
                      placeholder="999.999.999-99"
                      value={dep.cpf}
                      onChange={(e) =>
                        p.updateDependente(i, { cpf: maskCPF(e.target.value) })
                      }
                      error={depErr?.cpf}
                    />
                    <TextField
                      label="Nascimento"
                      inputMode="numeric"
                      placeholder="DD/MM/AAAA"
                      value={dep.nascimento}
                      onChange={(e) =>
                        p.updateDependente(i, {
                          nascimento: maskDate(e.target.value),
                        })
                      }
                      error={depErr?.nascimento}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </Card>

      {/* Money sections */}
      {DECLARACAO_SECTIONS.map((section) => (
        <Card key={section.id}>
          <SectionTitle>{section.title}</SectionTitle>
          {section.description && (
            <p className="mt-1 text-sm text-slate-500">{section.description}</p>
          )}
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {section.fields.map((field) => (
              <MoneyField
                key={field.id}
                label={field.label}
                value={p.money[field.id] ?? "0,00"}
                onChange={(v) => p.setMoney(field.id, v)}
              />
            ))}
          </div>
        </Card>
      ))}

      <div className="flex flex-wrap items-center justify-between gap-3">
        <Button variant="ghost" onClick={p.onBack}>
          <ChevronLeft className="h-4 w-4" /> Voltar
        </Button>
        <Button variant="accent" onClick={p.onSubmit}>
          Enviar declaração
        </Button>
      </div>
    </div>
  );
}

function EnviadaScreen({
  acompanhar,
  onAcompanhar,
  onSelectBoleto,
  onSair,
}: {
  acompanhar: boolean;
  onAcompanhar: () => void;
  onSelectBoleto: (m: BoletoMetodo) => void;
  onSair: () => void;
}) {
  return (
    <div className="flex flex-col gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        <Card>
          <AlertBanner tone="success" title="Sua declaração foi enviada!">
            Aguarde o processamento pela Receita Federal.
          </AlertBanner>
          {acompanhar ? (
            <p className="mt-4 rounded-xl bg-brand-soft px-4 py-3 text-sm text-brand-darker">
              Situação: <strong>Em análise</strong>. Você será avisado na sua
              Caixa Postal quando o processamento for concluído.
            </p>
          ) : (
            <button
              type="button"
              onClick={onAcompanhar}
              className="mt-4 text-sm font-semibold text-brand underline-offset-2 hover:underline"
            >
              Acompanhar o processamento &rarr;
            </button>
          )}
        </Card>

        <BoletoCard onSelect={onSelectBoleto} onCancel={onSair} />
      </div>

      <SairBar onSair={onSair} />
    </div>
  );
}

function AguardandoScreen({
  metodo,
  onCancel,
  onSair,
}: {
  metodo: BoletoMetodo;
  onCancel: () => void;
  onSair: () => void;
}) {
  const label = metodo === "pix" ? "pagamento via PIX" : "pagamento do boleto";
  return (
    <div className="flex flex-col gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        <Card>
          <AlertBanner tone="success" title="Declaração feita.">
            Aguardando o {label} para concluir a regularização.
          </AlertBanner>
        </Card>

        <Card>
          <div className="flex flex-col items-center gap-4 py-6 text-center">
            <SpinnerIcon className="h-10 w-10 animate-spin text-brand" />
            <p className="font-semibold text-slate-700">
              Aguardando pagamento…
            </p>
            <button
              type="button"
              onClick={onCancel}
              className="inline-flex h-10 items-center justify-center rounded-full border border-line px-5 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-100"
            >
              Cancelar
            </button>
          </div>
        </Card>
      </div>

      <SairBar onSair={onSair} />
    </div>
  );
}

function ComprovanteScreen({
  comprovante,
  fileRef,
  onPick,
  onFile,
  onConfirm,
  onCancel,
}: {
  comprovante: string | null;
  fileRef: React.RefObject<HTMLInputElement | null>;
  onPick: () => void;
  onFile: (name: string) => void;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <div className="flex flex-col gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        <Card>
          <AlertBanner tone="success" title="Declaração feita.">
            Para finalizar, envie o comprovante de pagamento do boleto.
          </AlertBanner>
        </Card>

        <Card>
          <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-brand">
            <span className="h-4 w-1.5 rounded-full bg-accent" />
            Enviar comprovante
          </h2>

          <button
            type="button"
            onClick={onPick}
            className="mt-4 flex w-full flex-col items-center gap-2 rounded-xl border-2 border-dashed border-line bg-surface px-4 py-8 text-center transition-colors hover:border-brand hover:bg-brand-soft"
          >
            <UploadIcon className="h-7 w-7 text-brand" />
            <span className="text-sm font-semibold text-slate-700">
              {comprovante ? "Trocar arquivo" : "Selecionar arquivo"}
            </span>
            <span className="text-xs text-slate-500">
              PDF, PNG ou JPG até 5 MB
            </span>
          </button>

          <input
            ref={fileRef}
            type="file"
            accept=".pdf,image/png,image/jpeg"
            className="sr-only"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) onFile(f.name);
            }}
          />

          {comprovante && (
            <p className="mt-3 truncate rounded-lg bg-success-soft px-3 py-2 text-sm font-medium text-emerald-900">
              {comprovante}
            </p>
          )}

          <div className="mt-4 flex items-center gap-3">
            <Button
              variant="accent"
              disabled={!comprovante}
              onClick={onConfirm}
            >
              Confirmar envio
            </Button>
            <button
              type="button"
              onClick={onCancel}
              className="text-sm font-medium text-slate-500 transition-colors hover:text-accent-dark"
            >
              Cancelar
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
}

function ConcluidoScreen({ onSair }: { onSair: () => void }) {
  return (
    <div className="flex flex-col items-center gap-5 rounded-2xl border border-line bg-white px-6 py-10 text-center shadow-sm">
      <div className="grid w-full max-w-md gap-3 sm:grid-cols-2">
        <AlertBanner tone="success" title="Declaração feita!" />
        <AlertBanner tone="success" title="Boleto enviado!" />
      </div>
      <p className="text-lg font-bold text-slate-800">
        Agora você pode usar o portal regularmente!
      </p>
      <p className="max-w-md text-sm text-slate-500">
        Suas pendências de Imposto de Renda foram resolvidas. Acompanhe
        novidades na sua Caixa Postal.
      </p>
      <Button onClick={onSair}>
        <HomeIcon className="h-4 w-4" /> Voltar ao início
      </Button>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-brand">
      <span className="h-4 w-1.5 rounded-full bg-accent" />
      {children}
    </h2>
  );
}

function SairBar({ onSair }: { onSair: () => void }) {
  return (
    <div className="flex justify-center">
      <Link
        href="/"
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();
          onSair();
        }}
        className="inline-flex h-11 items-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark"
      >
        <HomeIcon className="h-4 w-4" /> Sair
      </Link>
    </div>
  );
}
