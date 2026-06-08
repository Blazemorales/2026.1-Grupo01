"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { SearchBar } from "./components/portal/SearchBar";
import { SegmentedTabs } from "./components/ui/SegmentedTabs";
import { SERVICE_CATEGORIES, type Audience } from "@/lib/services";
import { ChevronRight } from "./components/portal/icons";

type AudienceTab = Exclude<Audience, "both">;

export default function HomePage() {
  const [audience, setAudience] = useState<AudienceTab>("pf");
  const [query, setQuery] = useState("");

  const categories = useMemo(() => {
    const term = query.trim().toLowerCase();
    return SERVICE_CATEGORIES.map((cat) => ({
      ...cat,
      services: cat.services.filter((s) => {
        const audienceOk = s.audience === "both" || s.audience === audience;
        const queryOk = term === "" || s.label.toLowerCase().includes(term);
        return audienceOk && queryOk;
      }),
    })).filter((cat) => cat.services.length > 0);
  }, [audience, query]);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <section className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">Simplifique</p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-darker sm:text-4xl">
          Central de Atendimento ao Contribuinte
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-slate-600">
          Escolha a categoria de serviço ou use a barra de busca para encontrar o que precisa.
        </p>
      </section>

      <div className="mx-auto mt-8 max-w-2xl">
        <SearchBar value={query} onChange={setQuery} />
      </div>

      <div className="mt-6 flex justify-center">
        <SegmentedTabs
          ariaLabel="Tipo de contribuinte"
          value={audience}
          onChange={setAudience}
          tabs={[
            { value: "pf", label: "Pessoa Física" },
            { value: "pj", label: "Pessoa Jurídica" },
          ]}
        />
      </div>

      <section className="mt-10">
        {categories.length === 0 ? (
          <p className="rounded-2xl border border-line bg-white px-6 py-10 text-center text-slate-500 shadow-sm">
            Nenhum serviço encontrado para <strong>“{query}”</strong>.
          </p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2">
            {categories.map((cat) => (
              <article
                key={cat.id}
                className="flex flex-col rounded-2xl border border-line bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <h2 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-brand">
                  <span className="h-4 w-1.5 rounded-full bg-accent" />
                  {cat.title}
                </h2>
                <ul className="flex flex-col">
                  {cat.services.map((service) => (
                    <li key={service.id}>
                      <Link
                        href={service.href}
                        className="group flex items-center justify-between gap-2 rounded-lg px-2 py-2.5 text-slate-700 transition-colors hover:bg-brand-soft hover:text-brand"
                      >
                        <span className="text-sm font-medium">{service.label}</span>
                        <ChevronRight className="h-4 w-4 text-slate-300 transition-colors group-hover:text-brand" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
