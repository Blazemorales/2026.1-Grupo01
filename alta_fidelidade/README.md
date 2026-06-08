# Alta Fidelidade — Protótipo 5 (Heyttor)

Implementação em **Next.js 16 (App Router) + React 19 + Tailwind CSS v4** do
protótipo de papel nº 5 — *"Agendamento de Atendimento Presencial"* — do Portal
Federal / CAC da Receita Federal.

## Como rodar

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # build de produção
```

## Rotas

| Rota                  | Tela do protótipo                        |
| --------------------- | ---------------------------------------- |
| `/`                   | Home: busca + Pessoa Física/Jurídica + categorias de serviço |
| `/agendar`            | Assistente de agendamento em 3 passos (Dados → Unidade → Data) + confirmação |
| `/agendar/consultar`  | "Meus agendamentos" (estado vazio)       |

## Estrutura

```
app/
  layout.tsx                 # Header compartilhado, lang pt-BR, metadata
  page.tsx                   # Home (client: busca + filtro por categoria/público)
  agendar/page.tsx           # Wizard de agendamento (máquina de estados client)
  agendar/consultar/page.tsx # Estado vazio (server component)
  components/
    ui/        Button, TextField, RadioSquare, Select, SegmentedTabs
    portal/    Header, Logo, SearchBar, Stepper, Calendar, EmptyState, icons
lib/
  services.ts                # Catálogo de serviços + unidades
  masks.ts                   # Máscaras/validação de CPF e telefone
```

## Tokens de tema

Definidos em `app/globals.css` via `@theme` do Tailwind v4 (utilitários
`bg-brand`, `text-accent`, `bg-success`, etc.). Paleta derivada do protótipo +
diretrizes gov.br: **brand** (azul), **indigo-mark** (Receita), **accent**
(laranja, aba ativa/busca), **success** (verde, datas disponíveis), **warning**
(âmbar, alerta).

## Decisões / ambiguidades

- O protótipo é em papel; traduzi a intenção para uma UI institucional limpa,
  preservando layout, hierarquia e os destaques de cor desenhados.
- As telas "serviços" e "página inicial" foram unificadas na Home (busca +
  grade de categorias) por serem o mesmo fluxo de escolha.
- O calendário usa **08/06/2026** como "hoje" fixo (data de referência do
  protótipo) — dias úteis a partir dessa data ficam disponíveis (verde).
- Serviços sem fluxo definido apontam para `#`; apenas *Agendamento presencial*
  navega para o wizard.
