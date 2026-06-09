import Link from "next/link";
import { Logo } from "./Logo";
import { LibrasIcon, UserIcon } from "./icons";

const NAV_LINKS = [
  { label: "Simplifique", href: "#" },
  { label: "Informação", href: "#" },
  { label: "Canais", href: "#" },
];

/** Shared top bar present on every screen of the prototype. */
export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-7 md:flex" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Acessibilidade em Libras"
            className="grid h-10 w-10 place-items-center rounded-lg bg-indigo-mark text-white transition-opacity hover:opacity-90"
          >
            <LibrasIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Minha conta"
            className="grid h-10 w-10 place-items-center rounded-full bg-brand-soft text-brand transition-colors hover:bg-brand hover:text-white"
          >
            <UserIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
