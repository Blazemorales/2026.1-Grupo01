# Análise de Tarefas

## Tabela de contribuição

| Autor | Análises realizadas | Data |
|---|---|---|
| [João Morais](https://github.com/Blazemorales) | Criação do Documento e Análise de Tarefa 1 — GOMS | 27/05/2026 |

## 1. Análise pelo método G.O.M.S

### 1.1 Análise GOMS - produzido por [João Pedro](https://github.com/Blazemorales) - Alteração de dados bancários para restituição do Imposto de Renda

**Ação Desejada Pelo Usuário**: Alteração de dados bancários para restituição do Imposto de Renda

**Pré-condição**: Usuário possui conta Gov.br com nível prata ou ouro, acesso à internet e conhecimento de navegadores de internet (busca por páginas). Ponto de partida: página inicial do e-CAC (`cav.receita.fazenda.gov.br`), usuário ainda não autenticado.

---

#### G.O.M.S

```
GOAL 0: Extrato do processamento do DIRF

  GOAL 1: Autenticar-se no e-CAC
    SEL. RULE: SE possui senha Gov.br → METHOD 1
               SE possui conta em banco conveniado → METHOD 2
               SE possui certificado digital instalado → METHOD 3
               SE possui certificado digital em nuvem →  METHOD 4

    METHOD 1: Login com CPF e senha Gov.br
      OP 1.1: Acessar o portal e-CAC no navegador
      OP 1.2: Clicar em "Entrar com Gov.br"
      OP 1.3: Digitar CPF e clicar em "Continuar"
      OP 1.4: Digitar a senha da conta Gov.br
      OP 1.5: Confirmar autenticação de 2 fatores (código pelo aplicativo Gov.br ou biometria)
      OP 1.6: Aguardar redirecionamento para o painel do e-CAC

    METHOD 2: Login pelo Internet Banking (banco conveniado)
      OP 2.1: Acessar o portal e-CAC no navegador
      OP 2.2: Clicar em "Entrar com Gov.br"
      OP 2.3: Digitar CPF e clicar em "Continuar"
      OP 2.4: Selecionar a opção "Entrar com seu banco"
      OP 2.5: Escolher o banco conveniado na lista exibida
      OP 2.6: Autenticar-se no ambiente do banco (agência, conta, senha ou token)
      OP 2.7: Aguardar redirecionamento para o painel do e-CAC

    METHOD 3: Login com Certificado Digital instalado
      OP 3.1: Acessar o portal e-CAC no navegador
      OP 3.2: Clicar em "Entrar com Gov.br"
      OP 3.3: Digitar CPF e clicar em "Continuar"
      OP 3.4: Selecionar a opção "Certificado Digital"
      OP 3.5: Selecionar o certificado instalado na máquina ou token USB
      OP 3.6: Digitar o PIN do certificado, se solicitado
      OP 3.7: Aguardar redirecionamento para o painel do e-CAC

    METHOD 4: Login com Certificado Digital em nuvem
      OP 4.1: Acessar o portal e-CAC no navegador
      OP 4.2: Clicar em "Entrar com Gov.br"
      OP 4.3: Digitar CPF e clicar em "Continuar"
      OP 4.4: Selecionar a opção "Certificado Digital em Nuvem"
      OP 4.5: Escolher o provedor de nuvem (ex: Soluti, Serpro, Certisign)
      OP 4.6: Autenticar-se no provedor (senha ou biometria pelo app)
      OP 4.7: Aguardar redirecionamento para o painel do e-CAC

  GOAL 2: Localizar a função "Alteração de Dados Bancários p/ Restituição do Imposto de Renda"
    SEL. RULE: SE o usuário conhece o menu → usar METHOD 1
               SE não conhece o caminho → usar METHOD 2

    METHOD 1: Navegação pelo menu lateral
      OP 1.1: Identificar o grupo "Restituição e Compensação" no menu
      OP 1.2: Clicar em "Restituição, Compensação, Parcelamento e Dívida"
      OP 1.3: Clicar em "Alterar Dados Bancários p/ Restituição do Imposto de Renda"

    METHOD 2: Busca pelo serviço via campo de pesquisa
      OP 2.1: Clicar em "Localizar Serviço" (campo de busca no topo)
      OP 2.2: Digitar "Alteração de Dados Bancários Restituição"
      OP 2.3: Verificar os resultados exibidos
      OP 2.4: Clicar no resultado correspondente ao serviço desejado

  GOAL 3: Preencher e confirmar os novos dados bancários
    METHOD 1: Edição direta no formulário exibido
      OP 1.1: Verificar os dados bancários atuais exibidos na tela
      OP 1.2: Selecionar o banco desejado na lista suspensa (campo "Banco")
      OP 1.3: Digitar o número da agência (sem dígito verificador)
      OP 1.4: Selecionar o tipo de conta: Corrente ou Poupança
      OP 1.5: Digitar o número da conta com dígito verificador
      OP 1.6: Confirmar que a conta está no CPF do contribuinte (verificação visual)
      OP 1.7: Clicar em "Gravar" ou "Confirmar"
      OP 1.8: Verificar a mensagem de confirmação de sucesso exibida pelo sistema
```

---

### 1.2 Análise GOMS - produzido por [João Pedro](https://github.com/Blazemorales) - Extrato do processamento do DIRF

**Ação Desejada Pelo Usuário**: Extrato do processamento do DIRF

**Pré-condição**: Usuário possui conta Gov.br com nível prata ou ouro, acesso à internet e conhecimento de navegadores de internet (busca por páginas). Ponto de partida: página inicial do e-CAC (`cav.receita.fazenda.gov.br`), usuário ainda não autenticado.

---

#### G.O.M.S

```
# Alterar dados bancários para restituição do Imposto de Renda

## GOAL 1 — Autenticar-se no e-CAC

**Regra de seleção:**
- Possui senha Gov.br → Método 1
- Possui conta em banco conveniado → Método 2
- Possui certificado digital instalado → Método 3
- Possui certificado digital em nuvem → Método 4

### Método 1 — Login com CPF e senha Gov.br

1. Acessar o portal e-CAC no navegador
2. Clicar em "Entrar com Gov.br"
3. Digitar CPF e clicar em "Continuar"
4. Digitar a senha da conta Gov.br
5. Confirmar autenticação de 2 fatores (código pelo aplicativo Gov.br ou biometria)
6. Aguardar redirecionamento para o painel do e-CAC

### Método 2 — Login pelo Internet Banking (banco conveniado)

1. Acessar o portal e-CAC no navegador
2. Clicar em "Entrar com Gov.br"
3. Digitar CPF e clicar em "Continuar"
4. Selecionar a opção "Entrar com seu banco"
5. Escolher o banco conveniado na lista exibida
6. Autenticar-se no ambiente do banco (agência, conta, senha ou token)
7. Aguardar redirecionamento para o painel do e-CAC

### Método 3 — Login com Certificado Digital instalado

1. Acessar o portal e-CAC no navegador
2. Clicar em "Entrar com Gov.br"
3. Digitar CPF e clicar em "Continuar"
4. Selecionar a opção "Certificado Digital"
5. Selecionar o certificado instalado na máquina ou token USB
6. Digitar o PIN do certificado, se solicitado
7. Aguardar redirecionamento para o painel do e-CAC

### Método 4 — Login com Certificado Digital em nuvem

1. Acessar o portal e-CAC no navegador
2. Clicar em "Entrar com Gov.br"
3. Digitar CPF e clicar em "Continuar"
4. Selecionar a opção "Certificado Digital em Nuvem"
5. Escolher o provedor de nuvem (ex: Soluti, Serpro, Certisign)
6. Autenticar-se no provedor (senha ou biometria pelo app)
7. Aguardar redirecionamento para o painel do e-CAC

---

## GOAL 2 — Localizar a função "Extrato de Processamento do DIRF"

**Regra de seleção:**
- Conhece o menu → Método 1
- Não conhece o caminho → Método 2

### Método 1 — Navegação pelo menu lateral

1. Identificar o grupo "Declarações e Demonstrativos" no menu
2. Clicar em "Declarações e Demonstrativos"
3. Identificar "DIRF - Declaração do Imposto de Renda Retido na Fonte"
4. Clicar em "Extrato do processamento da DIRF"

### Método 2 — Busca pelo serviço via campo de pesquisa

1. Clicar em "Localizar Serviço" (campo de busca no topo)
2. Digitar "Extrato do processamento da DIRF"
3. Verificar os resultados exibidos
4. Clicar no resultado correspondente ao serviço desejado

---

## GOAL 3 — Preencher e confirmar os novos dados bancários

### Método 1 — Edição direta no formulário exibido

1. Verificar os dados bancários atuais exibidos na tela
2. Selecionar o banco desejado na lista suspensa (campo "Banco")
3. Digitar o número da agência (sem dígito verificador)
4. Selecionar o tipo de conta: Corrente ou Poupança
5. Digitar o número da conta com dígito verificador
6. Confirmar que a conta está no CPF do contribuinte (verificação visual)
7. Clicar em "Gravar" ou "Confirmar"
8. Verificar a mensagem de confirmação de sucesso exibida pelo sistema

---
```

---

## 3. Agradecimentos

Agradecemos à IA generativa [Claude](https://claude.ai/new) by Antrophic, que nos ajudou a corrigir erros nas análises de tarefas (lógica incompleta no GOMS), e junto com o [ChatGPT](https://chatgpt.com/), converter as tabelas em formato suportado para markdown (.MD)

## 4. Referência Bibliográfica

## Versionamento 

| Versão | Data | Descrição | Autor(es/as) | Revisor(es/as) |
| :--- | :--- | :--- | :--- | :--- |
| 1.0 | 28/05/2026 | Iniciação do documento | [João Morais](https://github.com/Blazemorales) | [Heyttor Augusto](https://github.com/H3ytt0r62)|

---


