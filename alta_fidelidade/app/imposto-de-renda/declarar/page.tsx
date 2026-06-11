import { ImpostoFlow } from "../ImpostoFlow";

export const metadata = {
  title: "Declarar Imposto de Renda | e-CAC — Receita Federal",
};

/**
 * "Declarar meu Imposto de Renda" entry (Protótipo 1): goes straight to the
 * declaration form, then the boleto / comprovante flow.
 */
export default function DeclararPage() {
  return <ImpostoFlow start="declaracao" />;
}
