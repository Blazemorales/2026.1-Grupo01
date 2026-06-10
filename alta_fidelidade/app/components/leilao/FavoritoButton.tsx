"use client";

import type { SVGProps } from "react";

function StarIcon(p: SVGProps<SVGSVGElement> & { filled?: boolean }) {
  const { filled, ...rest } = p;
  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={1.8}
      aria-hidden
      {...rest}
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

interface FavoritoButtonProps {
  ativo: boolean;
  onToggle: () => void;
  className?: string;
}

export function FavoritoButton({ ativo, onToggle, className = "" }: FavoritoButtonProps) {
  return (
    <button
      onClick={onToggle}
      className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-colors
        ${ativo
          ? "text-amber-400 bg-amber-50 hover:bg-amber-100"
          : "text-gray-300 hover:text-amber-400 hover:bg-amber-50"
        } ${className}`}
      aria-label={ativo ? "Remover dos favoritos" : "Adicionar aos favoritos"}
    >
      <StarIcon className="w-4 h-4" filled={ativo} />
    </button>
  );
}