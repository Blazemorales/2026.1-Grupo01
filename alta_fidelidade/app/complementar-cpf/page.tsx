"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "../components/ui/Button";
import { TextField } from "../components/ui/TextField";
import {
  AlertTriangle,
  CheckIcon,
  ChevronLeft,
  DownloadIcon,
  FileIcon,
  InfoIcon,
} from "../components/portal/icons";
import { isValidTituloEleitor, maskTituloEleitor } from "@/lib/masks";

type Status = "idle" | "success" | "error";

const INITIAL_USER = {
  cpf: "123.456.789-09",
  situacao: "Regular",
  nome: "Lucas Andrade Silva",
  nascimento: "12/04/1998",
  mae: "Mariana Andrade Silva",
  tituloEleitor: "Nao informado",
};

export default function ComplementarCpfPage() {
  const [titulo, setTitulo] = useState("");
  const [savedTitulo, setSavedTitulo] = useState(INITIAL_USER.tituloEleitor);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const dadosAtuais = useMemo(
    () => [
      { label: "CPF atual", value: INITIAL_USER.cpf },
      { label: "Situacao cadastral", value: INITIAL_USER.situacao },
      { label: "Nome completo", value: INITIAL_USER.nome },
      { label: "Data de nascimento", value: INITIAL_USER.nascimento },
      { label: "Nome da mae", value: INITIAL_USER.mae },
      { label: "Titulo de eleitor", value: savedTitulo },
    ],
    [savedTitulo],
  );

  function confirmarAtualizacao() {
    if (!isValidTituloEleitor(titulo)) {
      setStatus("error");
      setMessage("Informe um titulo de eleitor valido com 12 digitos.");
      return;
    }

    setSavedTitulo(titulo);
    setStatus("success");
    setMessage("Dados cadastrais atualizados com sucesso.");
  }

  function gerarComprovante() {
    const linhas = [
      "Comprovante de dados cadastrais",
      "",
      `CPF: ${INITIAL_USER.cpf}`,
      `Situacao cadastral: ${INITIAL_USER.situacao}`,
      `Nome completo: ${INITIAL_USER.nome}`,
      `Data de nascimento: ${INITIAL_USER.nascimento}`,
      `Nome da mae: ${INITIAL_USER.mae}`,
      `Titulo de eleitor: ${savedTitulo}`,
      `Emitido em: ${new Date().toLocaleString("pt-BR")}`,
    ];

    const blob = new Blob([linhas.join("\n")], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "comprovante-dados-cadastrais.txt";
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
      <Link
        href="/"
        className="mb-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand transition-colors hover:text-brand-dark"
      >
        <ChevronLeft className="h-4 w-4" /> Voltar ao inicio
      </Link>

      <div className="flex flex-col gap-1">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">CPF</p>
        <h1 className="text-2xl font-extrabold tracking-tight text-brand-darker">
          Complementar dados cadastrais
        </h1>
        <p className="text-sm text-slate-500">
          Confira seus dados atuais e complemente as informacoes pendentes do seu CPF.
        </p>
      </div>

      <section className="mt-7 rounded-2xl border border-line bg-white p-6 shadow-sm">
        <div className="mb-5 flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-soft text-brand">
            <FileIcon className="h-5 w-5" />
          </span>
          <div>
            <h2 className="text-base font-bold text-slate-800">Dados atuais do usuario</h2>
            <p className="text-sm text-slate-500">Informacoes cadastradas na Receita Federal.</p>
          </div>
        </div>

        <dl className="divide-y divide-line rounded-xl border border-line text-sm">
          {dadosAtuais.map((item) => (
            <div key={item.label} className="grid gap-1 px-4 py-3 sm:grid-cols-[180px_1fr] sm:gap-4">
              <dt className="text-slate-500">{item.label}</dt>
              <dd className="font-semibold text-slate-800">{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-6 rounded-2xl border border-line bg-white p-6 shadow-sm">
        <div className="mb-5 flex items-start gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
            <InfoIcon className="h-5 w-5" />
          </span>
          <div>
            <h2 className="text-base font-bold text-slate-800">Dados para complementar</h2>
            <p className="text-sm text-slate-500">
              No momento, existe uma pendencia de titulo de eleitor para completar o cadastro.
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-end">
          <TextField
            label="Titulo de eleitor"
            inputMode="numeric"
            autoComplete="off"
            placeholder="0000 0000 0000"
            value={titulo}
            onChange={(event) => {
              setTitulo(maskTituloEleitor(event.target.value));
              setStatus("idle");
              setMessage("");
            }}
            hint="Digite os 12 numeros do titulo."
          />
          <Button variant="accent" onClick={confirmarAtualizacao}>
            Confirmar
          </Button>
        </div>

        {status !== "idle" && (
          <div
            className={[
              "mt-5 flex items-start gap-3 rounded-xl border px-4 py-3 text-sm",
              status === "success"
                ? "border-success/30 bg-success-soft text-success"
                : "border-accent/30 bg-accent-soft text-accent-dark",
            ].join(" ")}
            role="status"
          >
            {status === "success" ? (
              <CheckIcon className="mt-0.5 h-5 w-5 shrink-0" />
            ) : (
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" />
            )}
            <p className="font-medium">{message}</p>
          </div>
        )}
      </section>

      {status === "success" && (
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <Button variant="outline" onClick={gerarComprovante}>
            <DownloadIcon className="h-4 w-4" />
            Gerar comprovante
          </Button>
          <Link href="/">
            <Button variant="primary" fullWidth>
              Voltar ao inicio
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
