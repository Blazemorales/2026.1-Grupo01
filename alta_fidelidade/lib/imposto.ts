/**
 * Domain data for the "Imposto de Renda" flow, transcribed from the paper
 * prototype of João Morais (Protótipo 1): the "Declaração" form sections, the
 * "Minhas pendências" warning and the boleto download options.
 *
 * The visual layer lives under app/imposto-de-renda; this module keeps the
 * field definitions and copy in one place, mirroring lib/services.ts.
 */

/** A single "R$" money field inside a declaration section. */
export interface MoneyField {
  id: string;
  label: string;
}

/** A titled group of money fields ("Rendimentos", "Bens e Direitos", …). */
export interface DeclaracaoSection {
  id: string;
  title: string;
  description?: string;
  fields: MoneyField[];
}

/**
 * Money sections of the declaration, in the exact order drawn across the
 * prototype's pages: Rendimentos → Bens e Direitos → Dívidas e Ônus →
 * Pagamentos e Doações.
 */
export const DECLARACAO_SECTIONS: DeclaracaoSection[] = [
  {
    id: "rendimentos",
    title: "Rendimentos",
    description: "Informe os valores recebidos ao longo do ano-base.",
    fields: [
      { id: "salario", label: "Salário / Aposentadoria" },
      { id: "alugueis", label: "Aluguéis" },
      { id: "dividendos", label: "Lucros e Dividendos" },
    ],
  },
  {
    id: "bens",
    title: "Bens e Direitos",
    description: "Patrimônio existente em 31 de dezembro do ano-base.",
    fields: [
      { id: "saldo-bancario", label: "Saldo Bancário" },
      { id: "investimentos", label: "Investimentos" },
      { id: "imoveis", label: "Imóveis" },
      { id: "veiculos", label: "Veículos" },
      { id: "outros", label: "Outros" },
    ],
  },
  {
    id: "dividas",
    title: "Dívidas e Ônus",
    fields: [
      { id: "emprestimos", label: "Empréstimos" },
      { id: "financiamentos", label: "Financiamentos" },
      { id: "saldo-devedor", label: "Saldo devedor" },
    ],
  },
  {
    id: "pagamentos",
    title: "Pagamentos e Doações",
    description: "Despesas dedutíveis pagas no ano-base.",
    fields: [
      { id: "saude", label: "Despesas com saúde" },
      { id: "educacao", label: "Despesas com educação" },
      { id: "pensao", label: "Pensão Alimentícia" },
      { id: "previdencia", label: "Previdência" },
    ],
  },
];

/** Flat list of every money field id, useful to seed the form state with "0,00". */
export const MONEY_FIELD_IDS: string[] = DECLARACAO_SECTIONS.flatMap((s) =>
  s.fields.map((f) => f.id),
);

/**
 * The single outstanding pendência shown on the "Meus Dados" screen
 * ("Você possui pendências!" → "Você não declarou seu Imposto de Renda…").
 */
export const PENDENCIA_IR = {
  title: "Imposto de Renda não declarado",
  description:
    "Você não declarou seu Imposto de Renda. Agora será necessário declará-lo e pagar o boleto correspondente para regularizar sua situação.",
} as const;

/** Boleto value charged after the declaration is submitted (illustrative). */
export const BOLETO_VALOR = 187.34;

/** Ways to obtain / pay the boleto, as drawn in the prototype's "Boleto" card. */
export type BoletoMetodo = "pdf" | "imagem" | "pix";

export interface BoletoOption {
  id: BoletoMetodo;
  label: string;
  hint: string;
}

export const BOLETO_OPTIONS: BoletoOption[] = [
  { id: "pdf", label: "PDF", hint: "Baixar o boleto em PDF" },
  { id: "imagem", label: "Imagem", hint: "Salvar como imagem" },
  { id: "pix", label: "PIX", hint: "Pagar via PIX" },
];
