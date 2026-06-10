"use client";

import { useState } from "react";
import Link from "next/link";
import { CarrosselLeilao } from "../components/leilao/CarrosselLeilao";
import { RowAberto } from "../components/leilao/RowAberto";
import { ChevronLeft } from "../components/portal/icons";

export interface LeilaoItem {
  lote: string;
  codigo: string;
  imageSrc: string;
  uf: string;
  precoMin: number;
}

export interface LeilaoAberto {
  id: string;
  orgao: string;
  lotes: number;
  favorito: boolean;
}

export interface LeilaoFuturo {
  id: string;
  orgao: string;
  data: string;
  uf: string;
}

const CARDS: LeilaoItem[] = [
  { lote: "Lote 01", codigo: "VEI-001", imageSrc: "/icons/veiculo.svg",     uf: "DF", precoMin: 20000  },
  { lote: "Lote 02", codigo: "ELE-002", imageSrc: "/icons/eletronico.svg",  uf: "SP", precoMin: 3200   },
  { lote: "Lote 03", codigo: "IMO-003", imageSrc: "/icons/imovel.svg",      uf: "RJ", precoMin: 185000 },
  { lote: "Lote 04", codigo: "VEI-004", imageSrc: "/icons/veiculo.svg",     uf: "RS", precoMin: 21000  },
  { lote: "Lote 05", codigo: "EQP-005", imageSrc: "/icons/equipamento.svg", uf: "BA", precoMin: 7400   },
];

const ABERTOS: LeilaoAberto[] = [
  { id: "12345", orgao: "Receita Federal", lotes: 243, favorito: false },
  { id: "12288", orgao: "Receita Federal", lotes: 87,  favorito: false },
  { id: "11901", orgao: "Receita Federal", lotes: 412, favorito: false },
];

const FUTUROS: LeilaoAberto[] = [
  { id: "13001", orgao: "Receita Federal", lotes: 0, favorito: false },
  { id: "13045", orgao: "Receita Federal", lotes: 0, favorito: false },
  { id: "13102", orgao: "Receita Federal", lotes: 0, favorito: false },
  { id: "13200", orgao: "Receita Federal", lotes: 0, favorito: false },
];

export default function LeilaoHome() {
  const [abertos, setAbertos] = useState<LeilaoAberto[]>(ABERTOS);
  const [futuros, setFuturos] = useState<LeilaoAberto[]>(FUTUROS);

  function toggleFavAberto(id: string) {
    setAbertos(prev =>
      prev.map(l => l.id === id ? { ...l, favorito: !l.favorito } : l)
    );
  }

  function toggleFavFuturo(id: string) {
    setFuturos(prev =>
      prev.map(l => l.id === id ? { ...l, favorito: !l.favorito } : l)
    );
  }

  return (
    <div className="min-h-screen bg-[#f0f2f5]">
      <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 space-y-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-blue-700 hover:text-blue-900 mb-6 transition-colors"
        >
          <ChevronLeft width={16} height={16} />
          Voltar ao início
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 leading-tight">
          Leilões disponíveis
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Bens apreendidos disponíveis para lance. Selecione um lote para continuar.
        </p>
      </div>

      <main className="mx-auto max-w-2xl px-4 py-6 sm:px-6 space-y-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-4 py-5">
          <CarrosselLeilao itens={CARDS} />
        </div>

        <section>
          <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 px-1">
            Leilões Abertos
          </h2>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-100 overflow-hidden">
            {abertos.map(l => (
              <RowAberto key={l.id} item={l} onToggleFav={toggleFavAberto} />
            ))}
          </div>
        </section>

        <section className="pb-8">
          <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 px-1">
            Leilões Futuros
          </h2>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-100 overflow-hidden">
            {futuros.map(l => (
              <RowAberto key={l.id} item={l} onToggleFav={toggleFavFuturo} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}