"use client";

import { useState } from "react";

interface CarrosselProps {
  imagens: string[];
}

export function CarrosselPaginaProduto({ imagens }: CarrosselProps) {
  const [idx, setIdx] = useState(0);

  return (
    <div className="space-y-3">
      {/* Imagem principal */}
      <div className="relative w-full aspect-[4/3] bg-blue-50 rounded-2xl overflow-hidden flex items-center justify-center">
        <img
          src={imagens[idx]}
          alt={`Imagem ${idx + 1}`}
          className="w-24 h-24 opacity-40"
        />
        {/* Contador */}
        <span className="absolute bottom-3 right-3 text-[10px] font-semibold bg-black/40 text-white px-2 py-0.5 rounded-full">
          {idx + 1}/{imagens.length}
        </span>
        {/* Setas */}
        {imagens.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => setIdx((i) => (i - 1 + imagens.length) % imagens.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-sm transition-colors"
              aria-label="Imagem anterior"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => setIdx((i) => (i + 1) % imagens.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-sm transition-colors"
              aria-label="Próxima imagem"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Miniaturas */}
      {imagens.length > 1 && (
        <div className="flex gap-2">
          {imagens.map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIdx(i)}
              className={`w-14 h-14 rounded-xl border-2 bg-blue-50 flex items-center justify-center overflow-hidden transition-colors ${
                i === idx ? "border-blue-700" : "border-transparent hover:border-gray-300"
              }`}
              aria-label={`Ver imagem ${i + 1}`}
            >
              <img src={src} alt="" className="w-7 h-7 opacity-40" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}