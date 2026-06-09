import Link from "next/link";
import { EmptyState } from "../../components/portal/EmptyState";
import { Button } from "../../components/ui/Button";
import { ChevronLeft } from "../../components/portal/icons";

export const metadata = {
  title: "Meus agendamentos | CAC — Portal Federal",
};

export default function ConsultarPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12">
      <Link
        href="/agendar"
        className="mb-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand transition-colors hover:text-brand-dark"
      >
        <ChevronLeft className="h-4 w-4" /> Voltar
      </Link>

      <h1 className="mb-6 text-2xl font-extrabold tracking-tight text-brand-darker">Meus agendamentos</h1>

      <EmptyState
        title="Sem agendamentos até o momento"
        description="Quando você agendar um atendimento presencial, ele aparecerá aqui."
      >
        <Link href="/agendar">
          <Button variant="primary">Fazer um agendamento</Button>
        </Link>
      </EmptyState>
    </div>
  );
}
