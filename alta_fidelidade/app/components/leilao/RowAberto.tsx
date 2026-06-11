"use client";

import { Button } from "../ui/Button";
import { FavoritoButton } from "./FavoritoButton";
import { EyeIcon } from "./icons";
import type { LeilaoAberto } from "@/app/leilao/page";

interface RowAbertoProps {
  item: LeilaoAberto;
  onToggleFav: (id: string) => void;
  onVisualizar?: (id: string) => void;
}

export function RowAberto({ item, onToggleFav, onVisualizar }: RowAbertoProps) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 last:border-0">
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-gray-800 truncate">
          Nº {item.id}
          <span className="font-normal text-gray-500"> · {item.orgao}</span>
        </p>
        <p className="text-xs text-gray-400 mt-0.5">{item.lotes} lotes disponíveis</p>
      </div>

      <FavoritoButton ativo={item.favorito} onToggle={() => onToggleFav(item.id)} />

      <Button
        variant="outline"
        size="md"
        className="!h-8 !px-3 !text-xs gap-1.5 shrink-0"
        onClick={() => onVisualizar?.(item.id)}
      >
        <EyeIcon className="w-3.5 h-3.5" />
        Visualizar
      </Button>
    </div>
  );
}