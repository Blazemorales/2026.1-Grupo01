"use client";

import Link from "next/link";
import { User, Star, Gavel, Wallet, Clock, ChevronRight as ChevronRightIcon } from "lucide-react";
import { ChevronLeft } from "@/app/components/portal/icons";

const USUARIO = {
  nome: "Nome Sobrenome",
  clientela: "Pessoa Física",
  documento: "123.456.789-00",
};

const FAVORITOS = [
  { id: "1", titulo: "Notebook Dell Inspiron 15", subtitulo: "Lote 02 · ELE-002" },
  { id: "2", titulo: "Apartamento 68m², Niterói – RJ", subtitulo: "Lote 03 · IMO-003" },
];

const LANCES = [
  { id: "1", titulo: "Automóvel Volkswagen Gol 1.6", subtitulo: "Lance de R$ 20.500 · 09/06/2026" },
  { id: "2", titulo: "Smartphone Samsung Galaxy S22", subtitulo: "Lance de R$ 1.900 · 08/06/2026" },
  { id: "3", titulo: "Correia de Corsa Usada", subtitulo: "Lance de R$ 7.600 · 05/06/2026" },
];

const A_PAGAR = [
  { id: "1", titulo: "Motocicleta Honda CG 160", subtitulo: "Vencimento em 15/06/2026 · R$ 21.000" },
];

const HISTORICO = [
  { id: "1", titulo: "Leilão #11901 — Receita Federal", subtitulo: "Encerrado em 30/05/2026" },
  { id: "2", titulo: "Leilão #12102 — Receita Federal", subtitulo: "Encerrado em 18/05/2026" },
  { id: "3", titulo: "Leilão #11788 — Receita Federal", subtitulo: "Encerrado em 02/05/2026" },
];

interface ItemLista {
  id: string;
  titulo: string;
  subtitulo: string;
}

function SecaoLista({
  titulo,
  icon: Icon,
  itens,
  vazio,
}: {
  titulo: string;
  icon: React.ComponentType<{ className?: string }>;
  itens: ItemLista[];
  vazio: string;
}) {
  return (
    <section>
      <div className="flex items-center gap-2 mb-2 px-1">
        <Icon className="w-4 h-4 text-blue-700" />
        <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest">
          {titulo}
        </h2>
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-100 overflow-hidden">
        {itens.length > 0 ? (
          itens.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 px-4 py-3.5 hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-800 truncate">{item.titulo}</p>
                <p className="text-xs text-gray-400 mt-0.5">{item.subtitulo}</p>
              </div>
              <ChevronRightIcon className="w-4 h-4 text-gray-300 shrink-0" />
            </div>
          ))
        ) : (
          <div className="px-4 py-8 text-center text-sm text-gray-400">{vazio}</div>
        )}
      </div>
    </section>
  );
}

export default function PerfilUsuario() {
  return (
    <div className="min-h-screen bg-[#f0f2f5]">
      {/* Voltar */}
      <div className="mx-auto max-w-2xl px-4 pt-6 pb-0 sm:px-6">
        <Link
          href="/leilao"
          className="inline-flex items-center gap-1 text-sm text-blue-700 hover:text-blue-900 transition-colors"
        >
          <ChevronLeft width={16} height={16} />
          Voltar aos leilões
        </Link>
      </div>

      <main className="mx-auto max-w-2xl px-4 py-4 pb-8 sm:px-6 space-y-6">
        {/* Card de perfil */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-5 py-5">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
              <User className="w-8 h-8 text-blue-300" strokeWidth={1.5} />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-lg font-bold text-gray-900 leading-tight truncate">
                {USUARIO.nome}
              </h1>
              <p className="text-sm text-gray-500 mt-0.5">{USUARIO.clientela}</p>
              <p className="text-xs text-gray-400 mt-0.5">{USUARIO.documento}</p>
            </div>
          </div>
        </div>

        {/* Seções */}
        <SecaoLista
          titulo="Meus favoritos"
          icon={Star}
          itens={FAVORITOS}
          vazio="Você ainda não favoritou nenhum lote."
        />

        <SecaoLista
          titulo="Meus lances"
          icon={Gavel}
          itens={LANCES}
          vazio="Você ainda não fez nenhum lance."
        />

        <SecaoLista
          titulo="Leilões a pagar lance"
          icon={Wallet}
          itens={A_PAGAR}
          vazio="Nenhum pagamento pendente."
        />

        <SecaoLista
          titulo="Histórico"
          icon={Clock}
          itens={HISTORICO}
          vazio="Nenhum leilão no histórico."
        />
      </main>
    </div>
  );
}