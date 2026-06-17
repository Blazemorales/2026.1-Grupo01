"use client";

import { useState } from "react";
import Link from "next/link";

export default function ComprovacaoCpfPage() {
  const [impresso, setImpresso] = useState(false);

  function handleImprimir() {
    setImpresso(true);
    setTimeout(() => window.print(), 200);
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-2 text-sm text-slate-500">
        <Link href="/" className="text-brand hover:underline">Início</Link>
        <span>›</span>
        <Link href="/" className="text-brand hover:underline">Consultar meu CPF/CNPJ</Link>
        <span>›</span>
        <span className="text-slate-700 font-medium">Comprovação de CPF</span>
      </nav>

      {/* Título */}
      <h1 className="mb-8 flex items-center gap-3 text-2xl font-extrabold tracking-tight text-brand-darker">
        <span className="h-7 w-1.5 rounded-full bg-accent" />
        Comprovação de CPF
      </h1>

      {/* Card: Dados do CPF */}
      <div className="mb-5 rounded-2xl border border-line bg-white p-6 shadow-sm">
        <h2 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-accent">
          <span className="h-4 w-1 rounded-full bg-accent" />
          Dados do contribuinte
        </h2>

        <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm">
          <div>
            <p className="text-xs text-slate-500">CPF</p>
            <p className="font-semibold text-slate-800">999.999.999-99</p>
          </div>
          <div>
            <p className="text-xs text-slate-500">Situação cadastral</p>
            <span className="inline-block rounded-full bg-success-soft px-2.5 py-0.5 text-xs font-bold text-success">
              Regular
            </span>
          </div>
          <div>
            <p className="text-xs text-slate-500">Nome</p>
            <p className="font-semibold text-slate-800">NOME DO TITULAR</p>
          </div>
          <div>
            <p className="text-xs text-slate-500">Data de nascimento</p>
            <p className="font-semibold text-slate-800">01/01/1990</p>
          </div>
          <div>
            <p className="text-xs text-slate-500">Data de inscrição</p>
            <p className="font-semibold text-slate-800">15/03/2005</p>
          </div>
          <div>
            <p className="text-xs text-slate-500">Data de emissão do comprovante</p>
            <p className="font-semibold text-slate-800">16/06/2026</p>
          </div>
        </div>
      </div>

      {/* Card: Informações adicionais */}
      <div className="mb-8 rounded-2xl border border-line bg-white p-6 shadow-sm">
        <h2 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-accent">
          <span className="h-4 w-1 rounded-full bg-accent" />
          Informações adicionais
        </h2>

        <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm">
          <div>
            <p className="text-xs text-slate-500">Digito verificador</p>
            <p className="font-semibold text-slate-800">99</p>
          </div>
          <div>
            <p className="text-xs text-slate-500">Ano do exercício</p>
            <p className="font-semibold text-slate-800">2026</p>
          </div>
          <div className="col-span-2">
            <p className="text-xs text-slate-500">Endereço</p>
            <p className="font-semibold text-slate-800">Quadra 104 Sul, Bloco C, Nº 10 — Brasília / DF</p>
          </div>
        </div>

        <p className="mt-5 rounded-xl bg-warning-soft px-4 py-3 text-xs text-slate-600">
          Este comprovante tem validade de 60 dias a partir da data de emissão e serve como prova de regularidade cadastral perante a Receita Federal do Brasil.
        </p>
      </div>

      {/* Toast de sucesso de impressão */}
      {impresso && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-2xl bg-green-600 px-6 py-4 text-sm font-semibold text-white shadow-lg">
          Comprovante enviado para impressão.
        </div>
      )}

      {/* Botões */}
      <div className="flex justify-end gap-3">
        <Link
          href="/"
          className="rounded-xl border border-line px-5 py-2.5 text-sm font-semibold text-slate-500 hover:bg-slate-50 transition-colors"
        >
          Voltar ao início
        </Link>
        <button
          onClick={handleImprimir}
          className="rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark transition-colors"
        >
          Imprimir / Salvar PDF
        </button>
      </div>
    </div>
  );
}
