/**
 * Service catalogue shown on the home page, transcribed from the
 * "serviços" screen of the paper prototype (Protótipo 5 — Heyttor).
 */

export type Audience = "pf" | "pj" | "both";

export interface Service {
  id: string;
  label: string;
  href: string;
  audience: Audience;
}

export interface ServiceCategory {
  id: string;
  title: string;
  services: Service[];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "cpf",
    title: "CPF",
    services: [
      { id: "cpf-endereco", label: "Alteração de endereço", href: "#", audience: "pf" },
      { id: "cpf-comprovante", label: "Comprovação de CPF", href: "#", audience: "pf" },
      { id: "cpf-consulta", label: "Consulta de informação", href: "#", audience: "pf" },
    ],
  },
  {
    id: "cno",
    title: "CNO",
    services: [
      { id: "cno-gerir", label: "Inscrever, alterar ou consultar", href: "#", audience: "both" },
    ],
  },
  {
    id: "outros",
    title: "Outros",
    services: [
      { id: "agendamento", label: "Agendamento presencial", href: "/agendar", audience: "both" },
      { id: "caixa-portal", label: "Caixa Postal", href: "#", audience: "both" },
      { id: "leilao", label: "Leilão da receita", href: "/leilao", audience: "both" },
      { id: "chat", label: "Serviços via chat", href: "#", audience: "both" },
    ],
  },
  {
    id: "bancarios",
    title: "Dados bancários",
    services: [
      { id: "bancarios-alterar", label: "Alteração de dados bancários", href: "#", audience: "pf" },
    ],
  },
];

/** In-person service units offered for scheduling (from the "soltos" screen). */
export const UNIDADES = ["Gama", "Asa Sul", "Asa Norte", "Taguatinga"] as const;
export type Unidade = (typeof UNIDADES)[number];
