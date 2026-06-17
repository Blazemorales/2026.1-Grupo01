"use client";

import { useState } from "react";
import Link from "next/link";

type Modo = "brasil" | "exterior";

export default function AlterarEnderecoPage() {
  const [modo, setModo] = useState<Modo>("brasil");
  const [cep, setCep] = useState("");
  const [enderecoPreenchido, setEnderecoPreenchido] = useState(false);
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");
  const [pais, setPais] = useState("");
  const [cidadeExt, setCidadeExt] = useState("");
  const [logradouroExt, setLogradouroExt] = useState("");
  const [modalAberto, setModalAberto] = useState(false);
  const [sucesso, setSucesso] = useState(false);

  function formatarCep(valor: string) {
    const numeros = valor.replace(/\D/g, "").slice(0, 8);
    return numeros.length > 5
      ? numeros.slice(0, 5) + "-" + numeros.slice(5)
      : numeros;
  }

  function buscarCep() {
    // Simulação: em produção chamaria a API de CEP
    setLogradouro("Quadra 104 Sul, Bloco C");
    setCidade("Brasília");
    setUf("DF");
    setEnderecoPreenchido(true);
  }

  function handleModo(novoModo: Modo) {
    setModo(novoModo);
    setEnderecoPreenchido(false);
    setCep("");
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-2 text-sm text-slate-500">
        <Link href="/" className="text-brand hover:underline">Início</Link>
        <span>›</span>
        <Link href="/" className="text-brand hover:underline">Consultar meu CPF/CNPJ</Link>
        <span>›</span>
        <span className="text-slate-700 font-medium">Alteração de endereço</span>
      </nav>

      {/* Título */}
      <h1 className="mb-8 flex items-center gap-3 text-2xl font-extrabold tracking-tight text-brand-darker">
        <span className="h-7 w-1.5 rounded-full bg-accent" />
        Alteração de endereço
      </h1>

      {/* Card: Endereço atual */}
      <div className="mb-5 rounded-2xl border border-line bg-white p-6 shadow-sm">
        <h2 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-accent">
          <span className="h-4 w-1 rounded-full bg-accent" />
          Endereço atual
        </h2>
        <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
          <div>
            <p className="text-xs text-slate-500">CPF</p>
            <p className="font-semibold text-slate-800">999.999.999-99</p>
          </div>
          <div>
            <p className="text-xs text-slate-500">Endereço</p>
            <p className="font-semibold text-slate-800">Rua X, Quadra Y, Lote Z</p>
          </div>
          <div>
            <p className="text-xs text-slate-500">Número</p>
            <p className="font-semibold text-slate-800">0</p>
          </div>
          <div>
            <p className="text-xs text-slate-500">Cidade</p>
            <p className="font-semibold text-slate-800">Cidade 0</p>
          </div>
          <div>
            <p className="text-xs text-slate-500">UF</p>
            <p className="font-semibold text-slate-800">DF</p>
          </div>
        </div>
      </div>

      {/* Card: Novo endereço */}
      <div className="rounded-2xl border border-line bg-white p-6 shadow-sm">
        <h2 className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-accent">
          <span className="h-4 w-1 rounded-full bg-accent" />
          Novo endereço
        </h2>

        <p className="mb-4 text-sm font-semibold text-slate-700">Selecione o novo local</p>

        {/* Toggle Brasil / Exterior */}
        <div className="mb-6 flex gap-3">
          {(["brasil", "exterior"] as Modo[]).map((opcao) => (
            <button
              key={opcao}
              onClick={() => handleModo(opcao)}
              className={`flex-1 rounded-xl border py-2.5 text-sm font-semibold capitalize transition-colors ${
                modo === opcao
                  ? "border-brand bg-brand-soft text-brand"
                  : "border-line bg-white text-slate-500 hover:border-brand hover:text-brand"
              }`}
            >
              {opcao === "brasil" ? "🇧🇷 Brasil" : "🌐 Exterior"}
            </button>
          ))}
        </div>

        {/* Formulário Brasil */}
        {modo === "brasil" && (
          <div className="flex flex-col gap-4">
            <div className="flex items-end gap-3">
              <div className="flex-1">
                <label className="mb-1 block text-xs text-slate-500">CEP</label>
                <input
                  type="text"
                  value={cep}
                  onChange={(e) => setCep(formatarCep(e.target.value))}
                  placeholder="00000-000"
                  maxLength={9}
                  className="w-full rounded-lg border border-line px-3 py-2 text-sm text-slate-800 outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                />
              </div>
              <button
                onClick={buscarCep}
                className="rounded-lg border border-line bg-slate-50 px-4 py-2 text-sm text-slate-600 hover:bg-brand-soft hover:text-brand transition-colors"
              >
                Buscar
              </button>
            </div>
            <p className="text-xs text-slate-400">Digite o CEP para preencher o endereço automaticamente.</p>

            {enderecoPreenchido && (
              <>
                <div>
                  <label className="mb-1 block text-xs text-slate-500">Logradouro</label>
                  <input
                    type="text"
                    value={logradouro}
                    onChange={(e) => setLogradouro(e.target.value)}
                    className="w-full rounded-lg border border-line px-3 py-2 text-sm text-slate-800 outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="mb-1 block text-xs text-slate-500">Número</label>
                    <input
                      type="text"
                      value={numero}
                      onChange={(e) => setNumero(e.target.value)}
                      placeholder="Nº"
                      className="w-full rounded-lg border border-line px-3 py-2 text-sm text-slate-800 outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs text-slate-500">Complemento</label>
                    <input
                      type="text"
                      value={complemento}
                      onChange={(e) => setComplemento(e.target.value)}
                      placeholder="Apto, Bloco..."
                      className="w-full rounded-lg border border-line px-3 py-2 text-sm text-slate-800 outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2">
                    <label className="mb-1 block text-xs text-slate-500">Cidade</label>
                    <input
                      type="text"
                      value={cidade}
                      onChange={(e) => setCidade(e.target.value)}
                      className="w-full rounded-lg border border-line px-3 py-2 text-sm text-slate-800 outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs text-slate-500">UF</label>
                    <input
                      type="text"
                      value={uf}
                      onChange={(e) => setUf(e.target.value.toUpperCase())}
                      maxLength={2}
                      className="w-full rounded-lg border border-line px-3 py-2 text-sm text-slate-800 outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {/* Formulário Exterior */}
        {modo === "exterior" && (
          <div className="flex flex-col gap-4">
            <div>
              <label className="mb-1 block text-xs text-slate-500">País</label>
              <select
                value={pais}
                onChange={(e) => setPais(e.target.value)}
                className="w-full rounded-lg border border-line px-3 py-2 text-sm text-slate-800 outline-none focus:border-brand focus:ring-1 focus:ring-brand"
              >
                <option value="">Selecione o país</option>
                <option>Alemanha</option>
                <option>Argentina</option>
                <option>Austrália</option>
                <option>Canadá</option>
                <option>Espanha</option>
                <option>Estados Unidos</option>
                <option>França</option>
                <option>Itália</option>
                <option>Japão</option>
                <option>Portugal</option>
                <option>Reino Unido</option>
                <option>Outro</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-xs text-slate-500">Cidade</label>
              <input
                type="text"
                value={cidadeExt}
                onChange={(e) => setCidadeExt(e.target.value)}
                placeholder="Nome da cidade"
                className="w-full rounded-lg border border-line px-3 py-2 text-sm text-slate-800 outline-none focus:border-brand focus:ring-1 focus:ring-brand"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs text-slate-500">Logradouro</label>
              <input
                type="text"
                value={logradouroExt}
                onChange={(e) => setLogradouroExt(e.target.value)}
                placeholder="Endereço completo"
                className="w-full rounded-lg border border-line px-3 py-2 text-sm text-slate-800 outline-none focus:border-brand focus:ring-1 focus:ring-brand"
              />
            </div>
          </div>
        )}

        {/* Modal de confirmação */}
{modalAberto && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
    <div className="mx-4 w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl">
      <h3 className="mb-2 text-base font-bold text-slate-800">Tem certeza da mudança?</h3>
      <p className="mb-6 text-sm text-slate-500">
        Ao confirmar, seu endereço vinculado ao CPF será atualizado.
      </p>
      <div className="flex gap-3">
        <button
          onClick={() => setModalAberto(false)}
          className="flex-1 rounded-xl border border-line py-2.5 text-sm font-semibold text-slate-500 hover:bg-slate-50 transition-colors"
        >
          Não, voltar
        </button>
        <button
          onClick={() => {
            setModalAberto(false);
            setSucesso(true);
            setTimeout(() => {
              window.location.href = "/";
            }, 2500);
          }}
          className="flex-1 rounded-xl bg-accent py-2.5 text-sm font-semibold text-white hover:bg-orange-700 transition-colors"
        >
          Sim, confirmar
        </button>
      </div>
    </div>
  </div>
)}

{/* Toast de sucesso */}
{sucesso && (
  <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-2xl bg-green-600 px-6 py-4 text-sm font-semibold text-white shadow-lg">
    ✅ Endereço atualizado com sucesso! Redirecionando...
  </div>
)}

{/* Botões */}
<div className="mt-8 flex justify-end gap-3">
  <Link
    href="/"
    className="rounded-xl border border-line px-5 py-2.5 text-sm font-semibold text-slate-500 hover:bg-slate-50 transition-colors"
  >
    Cancelar
  </Link>
  <button
    onClick={() => setModalAberto(true)}
    className="rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-orange-700 transition-colors"
  >
    Confirmar alteração
  </button>
</div>
      </div>
    </div>
  );
}