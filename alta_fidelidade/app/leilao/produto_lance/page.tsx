"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft } from "@/app/components/portal/icons";
import { TextField } from "@/app/components/ui/TextField";
import { Button } from "@/app/components/ui/Button";
import { CarrosselPaginaProduto } from "@/app/components/leilao/CarrosselPaginaProduto";

const PRODUTO = {
  lote: "Lote 00",
  codigo: "XXX-000",
  descricao: "Produto Genérico",
  detalhe:
    "Esse é um produto genérico para visualizar como uma descrição irá funcionar.",
  categoria: "Genérico",
  uf: "DF",
  lanceMinimo: 3200,
  lanceAtual: 3750,
  encerramento: "30/10/2000 às 12h",
  imagens: [
    "/icons/eletronico.svg",
    "/icons/eletronico.svg",
    "/icons/eletronico.svg",
  ],
};

export default function ProdutoDetalhe() {
  const [lance, setLance] = useState("");
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState(false);

  function handleLance() {
    const valor = parseFloat(lance.replace(/\./g, "").replace(",", "."));
    if (!lance || isNaN(valor)) {
      setErro("Informe um valor para o lance.");
      return;
    }
    if (valor < PRODUTO.lanceMinimo) {
      setErro(
        `O lance mínimo é ${PRODUTO.lanceMinimo.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 0 })}.`
      );
      return;
    }
    setErro("");
    setSucesso(true);
  }

  return (
    <div className="min-h-screen bg-[#f0f2f5]">
      {/* ── Modal de sucesso ── */}
      {sucesso && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 px-4 pb-6 sm:pb-0">
          <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-6 space-y-5">
            {/* Ícone + texto */}
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-gray-900">Lance enviado!</h3>
              <p className="text-sm text-gray-500">
                Seu lance de{" "}
                <span className="font-semibold text-gray-800">
                  {parseFloat(lance.replace(/\./g, "").replace(",", ".")).toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 0 })}
                </span>{" "}
                foi registrado com sucesso.
              </p>
            </div>

            {/* Ações */}
            <div className="flex flex-col gap-2">
              <Button fullWidth>
                <Link href="/leilao/edital">Voltar ao edital</Link>
              </Button>
              <Button variant="outline" fullWidth>
                <Link href="/leilao">Ver lista de leilões</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
      {/* Voltar */}
      <div className="mx-auto max-w-2xl px-4 pt-6 pb-0 sm:px-6">
        <Link
          href="/leilao/edital"
          className="inline-flex items-center gap-1 text-sm text-blue-700 hover:text-blue-900 transition-colors"
        >
          <ChevronLeft width={16} height={16} />
          Voltar ao leilão
        </Link>
      </div>

      <main className="mx-auto max-w-2xl px-4 py-4 pb-8 sm:px-6 space-y-4">
        {/* Cabeçalho do lote */}
        <div className="px-1">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-0.5">
            {PRODUTO.lote} · {PRODUTO.codigo}
          </p>
          <h1 className="text-xl font-bold text-gray-900 leading-tight">
            {PRODUTO.descricao}
          </h1>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs text-gray-400">{PRODUTO.categoria}</span>
            <span className="text-xs text-gray-400">·</span>
            <span className="text-xs text-gray-400">{PRODUTO.uf}</span>
          </div>
        </div>

        {/* Carrossel */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
          <CarrosselPaginaProduto imagens={PRODUTO.imagens} />
        </div>

        {/* Descrição */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-5 py-5 space-y-3">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
            Descrição
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">{PRODUTO.detalhe}</p>
        </div>

        {/* Metadados */}
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Lance mínimo", value: PRODUTO.lanceMinimo.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 0 }) },
            { label: "Lance atual",  value: PRODUTO.lanceAtual.toLocaleString("pt-BR",  { style: "currency", currency: "BRL", minimumFractionDigits: 0 }) },
            { label: "Encerramento", value: PRODUTO.encerramento },
            { label: "Localização",  value: PRODUTO.uf },
          ].map(({ label, value }) => (
            <div key={label} className="bg-white rounded-2xl shadow-sm border border-gray-100 px-4 py-3">
              <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                {label}
              </p>
              <p className="text-sm font-semibold text-gray-800">{value}</p>
            </div>
          ))}
        </div>

        {/* Área de lance */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-5 py-5 space-y-4">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
            Fazer lance
          </h2>
          <TextField
            label="Valor do lance (R$)"
            placeholder="0,00"
            hint={`Mínimo: ${PRODUTO.lanceMinimo.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 0 })}`}
            error={erro}
            value={lance}
            onChange={(e) => {
              setLance(e.target.value);
              if (erro) setErro("");
            }}
            inputMode="decimal"
          />
          <div className="flex gap-3">
            <Button variant="outline" fullWidth>
              <Link href="/leilao/edital">Cancelar</Link>
            </Button>
            <Button fullWidth onClick={handleLance}>
              Enviar lance
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}