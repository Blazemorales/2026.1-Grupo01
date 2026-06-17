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
    title: "Consultar meu CPF/CNPJ",
    services: [
      {
        id: "minhas-pendencias",
        label: "Minhas pendências",
        href: "/imposto-de-renda",
        audience: "both",
      },
      {
        id: "cpf-endereco",
        label: "Alteração de endereço",
        href: "/CPF/Alteracao-endereco",
        audience: "pf",
      },
      {
        id: "cpf-comprovante",
        label: "Comprovação de CPF",
        href: "/CPF/Comprovacao",
        audience: "pf",
      },
      {
        id: "cpf-consulta",
        label: "Consulta de informação",
        href: "#",
        audience: "pf",
      },
      {
        id: "cpf-complementar",
        label: "Complementar Dados Cadastrais do CPF",
        href: "/complementar-cpf",
        audience: "pf",
      },
    ],
  },
  {
    id: "imposto-renda",
    title: "Imposto de Renda",
    services: [
      {
        id: "ir-declarar",
        label: "Declarar Imposto de Renda",
        href: "/imposto-de-renda/declarar",
        audience: "both",
      },
      {
        id: "ir-acompanhar",
        label: "Acompanhar processamento da declaração",
        href: "/imposto-de-renda/declarar",
        audience: "both",
      },
    ],
  },
  {
    id: "certidoes",
    title: "Certid\u00f5es e Situa\u00e7\u00e3o Fiscal",
    services: [
      {
        id: "cnd-emitir",
        label: "Emitir certid\u00e3o negativa de d\u00e9bito (CND)",
        href: "/certidoes",
        audience: "both",
      },
      {
        id: "cadin-rfb",
        label: "Consulta Pend\u00eancias - Cadin/RFB",
        href: "#",
        audience: "both",
      },
    ],
  },
  {
    id: "cno",
    title: "CNO",
    services: [
      {
        id: "cno-gerir",
        label: "Inscrever, alterar ou consultar",
        href: "#",
        audience: "both",
      },
    ],
  },
  {
    id: "outros",
    title: "Outros",
    services: [
      {
        id: "agendamento",
        label: "Agendamento presencial",
        href: "/agendar",
        audience: "both",
      },
      {
        id: "caixa-portal",
        label: "Caixa Postal",
        href: "#",
        audience: "both",
      },
      {
        id: "leilao",
        label: "Leilão da receita",
        href: "/leilao",
        audience: "both",
      },
      { id: "chat", label: "Serviços via chat", href: "#", audience: "both" },
    ],
  },
  {
    id: "bancarios",
    title: "Dados bancários",
    services: [
      {
        id: "bancarios-alterar",
        label: "Alteração de dados bancários",
        href: "#",
        audience: "pf",
      },
    ],
  },
];

/** In-person service units offered for scheduling (from the "soltos" screen). */
export const UNIDADES = ["Gama", "Asa Sul", "Asa Norte", "Taguatinga"] as const;
export type Unidade = (typeof UNIDADES)[number];
