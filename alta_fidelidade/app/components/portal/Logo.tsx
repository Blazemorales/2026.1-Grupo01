import Link from "next/link";
import { ReceitaMark } from "./icons";

/**
 * Header lockup: the "@cac" badge + Receita Federal wordmark, as drawn in the
 * top-left of the prototype's home screen ("Portal Federal").
 */
export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="CAC — Portal Federal, página inicial">
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand text-white shadow-sm">
        <span className="text-[15px] font-extrabold leading-none tracking-tight">cac</span>
      </span>
      <span className="flex flex-col leading-tight">
        <span className="flex items-center gap-1.5">
          <ReceitaMark className="h-4 w-4 text-indigo-mark" />
          <span className="text-[15px] font-bold text-brand-darker">Receita Federal</span>
        </span>
        <span className="text-xs text-slate-500">Portal Federal</span>
      </span>
    </Link>
  );
}
