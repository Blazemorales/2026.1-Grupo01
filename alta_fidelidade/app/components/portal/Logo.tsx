import Link from "next/link";
import Image from "next/image";
import receitaLogo from "../../../public/Receita.png";

/**
 * Header lockup: the "e-CAC" badge + the official Receita Federal logo, as drawn
 * in the top-left of the prototype's home screen ("Portal Federal").
 */
export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="e-CAC — Portal Federal, página inicial">
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand text-white shadow-sm">
        <span className="text-[15px] font-extrabold leading-none tracking-tight">e-CAC</span>
      </span>
      <span className="flex items-center gap-2.5">
        <Image
          src={receitaLogo}
          alt="Receita Federal"
          priority
          className="h-10 w-auto"
        />
        <span className="text-xs text-slate-500">Portal Federal</span>
      </span>
    </Link>
  );
}
