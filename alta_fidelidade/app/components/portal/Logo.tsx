import Link from "next/link";
import Image from "next/image";
import receitaLogo from "../../../public/Receita.png";
import ecacLogo from "../../../public/ecaclogo.png";

/**
 * Header lockup: the "e-CAC" badge + the official Receita Federal logo, as drawn
 * in the top-left of the prototype's home screen ("Portal Federal").
 */
export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
      aria-label="e-CAC — Portal Federal, página inicial"
    >
      <Image
        src={ecacLogo}
        alt="e-CAC"
        priority
        className="h-10 w-auto"
      />
      <span className="h-8 w-px bg-line" aria-hidden />
      <span className="flex items-center gap-2.5">
        <Image
          src={receitaLogo}
          alt="Receita Federal"
          priority
          className="h-9 w-auto"
        />
        <span className="text-xs text-slate-500">Portal Federal</span>
      </span>
    </Link>
  );
}
