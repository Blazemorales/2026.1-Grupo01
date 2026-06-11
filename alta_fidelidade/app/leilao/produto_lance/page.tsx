import Link from "next/link";
import { ChevronLeft } from "@/app/components/portal/icons";

export const metadata = {
  title: "Dar lance — Leilão da Receita",
};

/**
 * Placeholder page for the "produto_lance" route. The leilão feature scaffolded
 * this route empty; this stub provides a valid default export so the production
 * build succeeds. Replace with the real bidding screen.
 */
export default function ProdutoLance() {
  return (
    <div className="min-h-screen bg-[#f0f2f5]">
      <div className="mx-auto max-w-2xl px-4 pt-6 sm:px-6">
        <Link
          href="/leilao"
          className="inline-flex items-center gap-1 text-sm text-blue-700 transition-colors hover:text-blue-900"
        >
          <ChevronLeft width={16} height={16} />
          Voltar aos leilões
        </Link>
      </div>

      <main className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
        <div className="rounded-2xl border border-gray-100 bg-white px-6 py-12 text-center shadow-sm">
          <h1 className="text-xl font-bold text-gray-900">Dar lance</h1>
          <p className="mx-auto mt-2 max-w-sm text-sm text-gray-500">
            Esta seção está em construção e será disponibilizada em breve.
          </p>
        </div>
      </main>
    </div>
  );
}
