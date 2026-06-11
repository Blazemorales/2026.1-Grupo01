import { Fragment } from "react";
import { ChevronRight } from "../../components/portal/icons";

export interface Crumb {
  label: string;
  /** When provided, the crumb becomes a clickable navigation control. */
  onClick?: () => void;
}

/**
 * Trail shown above every screen of the prototype ("Início > Consultar meu
 * CPF/CNPJ > Meus Dados > Declaração"). Crumbs with an `onClick` are
 * navigable; the last crumb is the current page and is never clickable.
 */
export function Breadcrumb({ trail }: { trail: Crumb[] }) {
  return (
    <nav aria-label="Trilha de navegação" className="mb-5">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-500">
        {trail.map((crumb, i) => {
          const last = i === trail.length - 1;
          const clickable = !last && Boolean(crumb.onClick);
          return (
            <Fragment key={`${crumb.label}-${i}`}>
              <li>
                {clickable ? (
                  <button
                    type="button"
                    onClick={crumb.onClick}
                    className="rounded font-medium text-brand transition-colors hover:text-brand-dark hover:underline"
                  >
                    {crumb.label}
                  </button>
                ) : (
                  <span
                    aria-current={last ? "page" : undefined}
                    className={last ? "font-semibold text-brand-darker" : ""}
                  >
                    {crumb.label}
                  </span>
                )}
              </li>
              {!last && <ChevronRight aria-hidden className="h-3.5 w-3.5 text-slate-300" />}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
