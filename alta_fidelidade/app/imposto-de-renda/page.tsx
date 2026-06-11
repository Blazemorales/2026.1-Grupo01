import { ImpostoFlow } from "./ImpostoFlow";

export const metadata = {
  title: "Minhas pendências | e-CAC — Receita Federal",
};

/**
 * "Minhas pendências" entry (Protótipo 1): opens with the processing dialog,
 * then shows the outstanding Imposto de Renda pendência on "Meus Dados".
 */
export default function PendenciasPage() {
  return <ImpostoFlow start="pendencias" />;
}
