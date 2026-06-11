"use client";
import { ImageIcon } from "lucide-react";

interface CardLeilaoProps {
  lote: string;
  codigo: string;
  imageSrc: string;
  uf: string;
  precoMin: number;
  onClick?: () => void;
}

export function CardLeilao({ lote, codigo, uf, precoMin, onClick }: CardLeilaoProps) {
  const precoFormatado = precoMin.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return (
    <div
      onClick={onClick}
      className="
        flex flex-col items-center
        w-36 h-52
        bg-white border border-gray-100
        rounded-2xl
        shadow-sm hover:shadow-md hover:border-blue-200
        cursor-pointer select-none shrink-0
        px-3 pt-4 pb-3
        transition-all duration-150 group"
    >
      <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest leading-none mb-3">
        {lote}
      </span>
      <div className="flex-1 flex items-center justify-center w-full">
        <div className="relative w-16 aspect-square bg-blue-50 rounded-xl overflow-hidden flex items-center justify-center">
          <ImageIcon className="w-8 h-8 text-blue-300" strokeWidth={1} />
        </div>
      </div>
      <div className="w-full mt-3 space-y-1">
        <p className="text-sm font-bold text-gray-800 text-center leading-tight">
          {codigo}
        </p>
        <p className="text-xs text-gray-400 text-center">{uf}</p>
        <div className="mt-2 w-full bg-blue-50 rounded-xl py-1.5">
          <p className="text-xs font-semibold text-blue-700 text-center">
            {precoFormatado}
          </p>
        </div>
      </div>
    </div>
  );
}