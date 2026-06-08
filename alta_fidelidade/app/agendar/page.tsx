"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "../components/ui/Button";
import { TextField } from "../components/ui/TextField";
import { RadioSquare } from "../components/ui/RadioSquare";
import { Select } from "../components/ui/Select";
import { Stepper } from "../components/portal/Stepper";
import { Calendar } from "../components/portal/Calendar";
import { ChevronLeft, CheckIcon } from "../components/portal/icons";
import { UNIDADES } from "@/lib/services";
import { maskCPF, maskPhone, isValidCPF, isValidPhone } from "@/lib/masks";

const STEPS = ["Dados", "Unidade", "Data"];
type Para = "mim" | "outro";

interface FieldErrors {
  cpf?: string;
  telefone?: string;
  para?: string;
}

export default function AgendarPage() {
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);

  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [para, setPara] = useState<Para | null>(null);
  const [unidade, setUnidade] = useState<string | null>(null);
  const [date, setDate] = useState<Date | null>(null);
  const [errors, setErrors] = useState<FieldErrors>({});

  function validateStep1(): boolean {
    const next: FieldErrors = {};
    if (!isValidCPF(cpf)) next.cpf = "Informe um CPF válido.";
    if (!isValidPhone(telefone)) next.telefone = "Informe um telefone válido.";
    if (!para) next.para = "Selecione para quem é o atendimento.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function advance() {
    if (step === 1 && !validateStep1()) return;
    if (step === 2 && !unidade) return;
    setStep((s) => Math.min(s + 1, STEPS.length));
  }

  if (done) {
    return (
      <Confirmation
        cpf={cpf}
        telefone={telefone}
        unidade={unidade!}
        date={date!}
      />
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12">
      <Link
        href="/"
        className="mb-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand transition-colors hover:text-brand-dark"
      >
        <ChevronLeft className="h-4 w-4" /> Voltar ao início
      </Link>

      <h1 className="text-2xl font-extrabold tracking-tight text-brand-darker">Agendamento presencial</h1>
      <p className="mt-1 text-sm text-slate-500">Atendimento na Central de Atendimento ao Contribuinte.</p>

      <div className="mt-7">
        <Stepper steps={STEPS} current={step} />
      </div>

      <div className="mt-8 rounded-2xl border border-line bg-white p-6 shadow-sm">
        {step === 1 && (
          <div className="flex flex-col gap-5">
            <TextField
              label="Seu CPF"
              inputMode="numeric"
              autoComplete="off"
              placeholder="999.999.999-99"
              value={cpf}
              onChange={(e) => setCpf(maskCPF(e.target.value))}
              error={errors.cpf}
            />
            <TextField
              label="Telefone"
              inputMode="tel"
              autoComplete="tel"
              placeholder="(99) 99999-9999"
              value={telefone}
              onChange={(e) => setTelefone(maskPhone(e.target.value))}
              error={errors.telefone}
            />
            <div>
              <RadioSquare<Para>
                legend="O atendimento será para:"
                name="para"
                value={para}
                onChange={(v) => setPara(v)}
                options={[
                  { value: "mim", label: "Mim" },
                  { value: "outro", label: "Outro" },
                ]}
              />
              {errors.para && <p className="mt-1 text-xs font-medium text-accent-dark">{errors.para}</p>}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="flex flex-col gap-5">
            <p className="text-sm text-slate-600">Selecione a unidade de atendimento mais próxima de você.</p>
            <Select label="Unidade" value={unidade} options={UNIDADES} onChange={setUnidade} />
          </div>
        )}

        {step === 3 && (
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold text-slate-700">Escolha uma das datas disponíveis</p>
            <Calendar selected={date} onSelect={setDate} />
          </div>
        )}
      </div>

      {/* Footer actions — vary per step, mirroring the prototype's buttons. */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        {step === 1 ? (
          <Link
            href="/agendar/consultar"
            className="inline-flex h-11 items-center justify-center rounded-full border border-brand bg-white px-5 text-sm font-semibold text-brand transition-colors hover:bg-brand-soft"
          >
            Consultar agendamento
          </Link>
        ) : (
          <Button variant="ghost" onClick={() => setStep((s) => s - 1)}>
            <ChevronLeft className="h-4 w-4" /> Voltar
          </Button>
        )}

        <div className="flex items-center gap-3">
          {step === 3 && (
            <Link href="/" className="text-sm font-medium text-slate-500 hover:text-accent-dark">
              Cancelar
            </Link>
          )}
          {step < 3 ? (
            <Button onClick={advance} disabled={step === 2 && !unidade}>
              Avançar
            </Button>
          ) : (
            <Button variant="accent" disabled={!date} onClick={() => setDone(true)}>
              Confirmar agendamento
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

function Confirmation({
  cpf,
  telefone,
  unidade,
  date,
}: {
  cpf: string;
  telefone: string;
  unidade: string;
  date: Date;
}) {
  const formatted = date.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-line bg-white px-6 py-10 text-center shadow-sm">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-success-soft text-success">
          <CheckIcon className="h-9 w-9" />
        </span>
        <div>
          <h1 className="text-xl font-bold text-slate-800">Agendamento confirmado!</h1>
          <p className="mt-1 text-sm text-slate-500">
            Enviamos os detalhes para o telefone informado. Chegue com 15 minutos de antecedência.
          </p>
        </div>

        <dl className="mt-2 w-full max-w-sm divide-y divide-line rounded-xl border border-line text-left text-sm">
          <Row label="CPF" value={cpf} />
          <Row label="Telefone" value={telefone} />
          <Row label="Unidade" value={unidade} />
          <Row label="Data" value={formatted} />
        </dl>

        <Link href="/" className="mt-2">
          <Button variant="primary">Voltar ao início</Button>
        </Link>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between px-4 py-3">
      <dt className="text-slate-500">{label}</dt>
      <dd className="font-semibold capitalize text-slate-800">{value}</dd>
    </div>
  );
}
