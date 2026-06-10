import React, { useRef, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from '../portal/icons';
import { CardLeilao } from './CardLeilao';

interface LeilaoItem {
  lote: string;
  codigo: string;
  imageSrc: string;
  uf: string;
  precoMin: number;
}

interface CarrosselLeilaoProps {
  titulo?: string;
  itens: LeilaoItem[];
  onCardClick?: (item: LeilaoItem, index: number) => void;
}

export function CarrosselLeilao({ titulo, itens, onCardClick }: CarrosselLeilaoProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const SCROLL_AMOUNT = 240;

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: direction === 'left' ? -SCROLL_AMOUNT : SCROLL_AMOUNT, behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      {titulo && (
        <div className="flex items-center justify-between mb-3 px-1">
          <h2 className="text-sm font-semibold text-gray-700 tracking-wide uppercase">
            {titulo}
          </h2>
          <span className="text-xs text-gray-400">{itens.length} itens</span>
        </div>
      )}

      <div className="relative flex items-center">

        <button
        onClick={() => scroll('left')}
        disabled={!canScrollLeft}
        aria-label="Rolar para a esquerda"
        className="
            shrink-0 z-10
            w-7 h-7 mr-1
            flex items-center justify-center
            rounded-full bg-white shadow-md
            text-gray-400 hover:text-gray-700 hover:shadow-lg
            disabled:opacity-0 disabled:pointer-events-none
            transition-all duration-150"
        >
        <ChevronLeft width={16} height={16} />
        </button>

        <div
          className="
            pointer-events-none absolute left-8 w-6 h-full z-10
            bg-gradient-to-r from-gray-50 to-transparent
            transition-opacity duration-200"
          style={{ opacity: canScrollLeft ? 1 : 0 }}
        />

        <div
          ref={scrollRef}
          onScroll={updateScrollState}
          className="
            flex flex-row gap-3
            overflow-x-auto
            scroll-smooth
            scrollbar-none
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
            py-2 px-1"
        >
          {itens.map((item, index) => (
            <CardLeilao
              key={`${item.codigo}-${index}`}
              {...item}
              onClick={() => onCardClick?.(item, index)}
            />
          ))}
        </div>

        <div
          className="
            pointer-events-none absolute right-8 w-6 h-full z-10
            bg-gradient-to-l from-gray-50 to-transparent
            transition-opacity duration-200"
          style={{ opacity: canScrollRight ? 1 : 0 }}
        />

        <button
        onClick={() => scroll('right')}
        disabled={!canScrollRight}
        aria-label="Rolar para a direita"
        className="
            shrink-0 z-10
            w-7 h-7 ml-1
            flex items-center justify-center
            rounded-full bg-white shadow-md
            text-gray-400 hover:text-gray-700 hover:shadow-lg
            disabled:opacity-0 disabled:pointer-events-none
            transition-all duration-150"
        >
        <ChevronRight width={16} height={16} />
        </button>

      </div>
    </div>
  );
}