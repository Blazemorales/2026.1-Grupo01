"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft } from "@/app/components/portal/icons";

export interface LoteProduto {
  id: string;
  lote: string;
  codigo: string;
  descricao: string;
  imageSrc: string;
  uf: string;
  categoria: string;
  precoMin: number;
}

const LEILAO = {
  id: "12345",
  orgao: "Receita Federal",
  modalidade: "Leilão Eletrônico",
  dataAbertura: "20/06/2025",
  dataEncerramento: "27/07/2025",
  edital: "SRRF08-2025-001",
  descricao:
    "Bens apreendidos pela Receita Federal do Brasil, 8ª Região Fiscal. Os lotes incluem veículos, eletrônicos, equipamentos e imóveis. Os lances são feitos exlusivamente de forma eletrônica.",
  totalLotes: 243,
};

const LOTES: LoteProduto[] = [
  {
    id: "1",
    lote: "Lote 01",
    codigo: "VEI-001",
    descricao: "Automóvel Volkswagen Gol 1.6, 2018, branco, 72.000 km",
    imageSrc: "/icons/veiculo.svg",
    uf: "DF",
    categoria: "Veículo",
    precoMin: 20000,
  },
  {
    id: "2",
    lote: "Lote 02",
    codigo: "ELE-002",
    descricao: "Notebook Dell Inspiron 15, i5, 8GB RAM, 256GB SSD",
    imageSrc: "/icons/eletronico.svg",
    uf: "SP",
    categoria: "Eletrônico",
    precoMin: 3200,
  },
  {
    id: "3",
    lote: "Lote 03",
    codigo: "IMO-003",
    descricao: "Apartamento 68m², 2 quartos, Bairro Centro, Niterói – RJ",
    imageSrc: "/icons/imovel.svg",
    uf: "RJ",
    categoria: "Imóvel",
    precoMin: 185000,
  },
  {
    id: "4",
    lote: "Lote 04",
    codigo: "VEI-004",
    descricao: "Motocicleta Honda CG 160, 2020, prata, 31.400 km",
    imageSrc: "/icons/veiculo.svg",
    uf: "RS",
    categoria: "Veículo",
    precoMin: 21000,
  },
  {
    id: "5",
    lote: "Lote 05",
    codigo: "EQP-005",
    descricao: "Compressor de ar industrial 100L, marca Schulz, monofásico",
    imageSrc: "/icons/equipamento.svg",
    uf: "BA",
    categoria: "Equipamento",
    precoMin: 7400,
  },
  {
    id: "6",
    lote: "Lote 06",
    codigo: "ELE-006",
    descricao: "Smartphone Samsung Galaxy S22, 128GB, preto, sem uso",
    imageSrc: "/icons/eletronico.svg",
    uf: "MG",
    categoria: "Eletrônico",
    precoMin: 1800,
  },
];

function CategoryPill({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      onClick={onChange}
      className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1 rounded-full transition-colors ${
        checked
          ? "bg-blue-700 text-white"
          : "bg-white text-gray-500 border border-gray-200 hover:border-blue-300 hover:text-blue-700"
      }`}
    >
      {/* Checkbox indicator */}
      <span
        className={`flex-shrink-0 w-3.5 h-3.5 rounded-[4px] border flex items-center justify-center transition-colors ${
          checked ? "border-white/60 bg-white/20" : "border-gray-300"
        }`}
      >
        {checked && (
          <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
            <path
              d="M1 3l2 2 4-4"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      {label}
    </button>
  );
}

function RowLote({ item }: { item: LoteProduto }) {
  return (
    <div className="flex items-center gap-4 px-4 py-4 hover:bg-gray-50 cursor-pointer transition-colors">
      {/* Ícone */}
      <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center">
        <img src={item.imageSrc} alt={item.categoria} width={24} height={24} />
      </div>

      {/* Texto */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            {item.lote}
          </span>
          <span className="text-[10px] text-gray-400">·</span>
          <span className="text-xs text-gray-400">{item.codigo}</span>
        </div>
        <p className="text-sm text-gray-800 font-medium mt-0.5 truncate">{item.descricao}</p>
        <div className="flex items-center gap-3 mt-1">
          <span className="text-xs text-gray-400">{item.uf}</span>
          <span className="text-xs text-gray-400">·</span>
          <span className="text-xs text-gray-400">{item.categoria}</span>
        </div>
      </div>

      {/* Preço */}
      <div className="flex-shrink-0 text-right">
        <p className="text-[10px] text-gray-400 mb-0.5">Lance mín.</p>
        <p className="text-sm font-bold text-gray-900">
          {item.precoMin.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 0,
          })}
        </p>
      </div>

      {/* Seta */}
      <svg
        className="flex-shrink-0 text-gray-300 ml-1"
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M6 4l4 4-4 4"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function LeilaoDetalhe() {
  const categorias = Array.from(new Set(LOTES.map((l) => l.categoria)));
  // Empty set = nenhum filtro ativo = mostrar tudo
  const [filtros, setFiltros] = useState<Set<string>>(new Set());

  function toggleCategoria(cat: string) {
    setFiltros((prev) => {
      const next = new Set(prev);
      next.has(cat) ? next.delete(cat) : next.add(cat);
      return next;
    });
  }

  const lotesFiltrados =
    filtros.size === 0 ? LOTES : LOTES.filter((l) => filtros.has(l.categoria));

  const countLabel =
    filtros.size === 0
      ? `${LOTES.length} no total`
      : `${lotesFiltrados.length} de ${LOTES.length}`;

  return (
    <div className="min-h-screen bg-[#f0f2f5]">
      {/* Cabeçalho superior */}
      <div className="mx-auto max-w-2xl px-4 pt-6 pb-0 sm:px-6">
        <Link
          href="/leilao"
          className="inline-flex items-center gap-1 text-sm text-blue-700 hover:text-blue-900 transition-colors"
        >
          <ChevronLeft width={16} height={16} />
          Voltar aos leilões
        </Link>
      </div>

      {/* Card de informações do leilão */}
      <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-5 py-5 space-y-4">
          {/* Título + badge */}
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                Leilão #{LEILAO.id}
              </p>
              <h1 className="text-xl font-bold text-gray-900 leading-tight">
                {LEILAO.orgao}
              </h1>
              <p className="text-sm text-gray-500 mt-0.5">{LEILAO.modalidade}</p>
            </div>
            <span className="flex-shrink-0 text-xs font-semibold px-3 py-1 rounded-full bg-green-100 text-green-700 mt-1">
              Aberto
            </span>
          </div>

          {/* Descrição */}
          <p className="text-sm text-gray-600 leading-relaxed">{LEILAO.descricao}</p>

          {/* Metadados em grade */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            {[
              { label: "Edital",         value: LEILAO.edital },
              { label: "Abertura",       value: LEILAO.dataAbertura },
              { label: "Encerramento",   value: LEILAO.dataEncerramento },
              { label: "Total de lotes", value: `${LEILAO.totalLotes} lotes` },
            ].map(({ label, value }) => (
              <div key={label} className="bg-gray-50 rounded-xl px-3 py-2.5">
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                  {label}
                </p>
                <p className="text-sm font-semibold text-gray-800">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lista de lotes */}
      <main className="mx-auto max-w-2xl px-4 pb-8 sm:px-6 space-y-4">
        {/* Cabeçalho da seção */}
        <div className="flex items-center justify-between px-1">
          <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest">
            Lotes — {countLabel}
          </h2>
          {filtros.size > 0 && (
            <button
              type="button"
              onClick={() => setFiltros(new Set())}
              className="text-[11px] font-semibold text-blue-700 hover:text-blue-900 transition-colors"
            >
              Limpar filtros
            </button>
          )}
        </div>

        {/* Categoria com checkbox */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {categorias.map((cat) => (
            <CategoryPill
              key={cat}
              label={cat}
              checked={filtros.has(cat)}
              onChange={() => toggleCategoria(cat)}
            />
          ))}
        </div>

        {/* Rows de lotes */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-100 overflow-hidden">
          {lotesFiltrados.length > 0 ? (
            lotesFiltrados.map((l) => <RowLote key={l.id} item={l} />)
          ) : (
            <div className="px-4 py-10 text-center text-sm text-gray-400">
              Nenhum lote encontrado para esta categoria.
            </div>
          )}
        </div>

        {/* Botão voltar */}
        <div className="pt-2">
          <Link
            href="/leilao"
            className="flex items-center justify-center gap-2 w-full rounded-2xl border border-gray-200 bg-white py-3.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-sm"
          >
            <ChevronLeft width={16} height={16} />
            Voltar à lista de leilões
          </Link>
        </div>
      </main>
    </div>
  );
}