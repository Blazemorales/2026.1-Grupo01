## Introdução 

No design de Interação Humano-Computador (IHC), um cenário é definido simplesmente como uma história sobre pessoas realizando uma atividade.Trata-se de uma narrativa (textual ou pictórica) concreta e rica em detalhes contextuais que descreve uma situação de uso de uma aplicação, envolvendo usuários, processos e dados reais ou potenciais.

Para que um cenário seja completo e útil para a análise, ele deve conter os seguintes elementos
- Atores: As pessoas que interagem com o sistema (geralmente baseadas nas personas criadas)
- Ambiente ou Contexto: Detalhes da situação que motivam ou explicam as ações dos atores
- Objetivos: O que os atores desejam alcançar
- Ações e Eventos: O comportamento observável do ator e as reações do sistema ou do ambiente
- Avaliação: Como o ator interpreta o resultado das ações

## Tabela de contribuição

|Autor| Personas criadas | data |
|-----|------------------|------|
| [Heyttor augusto](https://github.com/H3ytt0r62) | Criação dos cenários [1](#cenário-1---mudança-do-endereço-do-cpf) e [2](#cenário-2---baixar-o-comprovante-de-cpf) | 02/05/2026 |
| [Thiago Gomes](https://github.com/thgomxs) | Criação dos cenários [3](#cenário-3---consulta-de-pendências-na-malha-fina-do-irpf) e [4](#cenário-4---emissão-de-darf-para-pagamento-de-cota-do-imposto-de-renda) | 02/05/2026 |
| [João Morais](https://github.com/Blazemorales) | Criação do cenário [5](#cenário-5---minhas-dívidas-e-pendências) | 02/05/2026 |
| [Rafael Melatti](https://github.com/Romm-0) | Criação dos cenário [6](#cenário-6---particpação-em-leilão-da-receita-federal) e [7](#cenário-7---consulta-de-rendimentos-por-responsável) | 02/05/2026 |


## Cenários

## Cenário 1 - Mudança do endereço do CPF

## Contexto

Após uma mudança de endereço [Carlos Oliveira](../Personas/Elenco_de_personas.md), deseja trocar o endereço relacionado a seu CPF para o atual. Desejando fazer isso da forma mais prática possivel decidi utilizar o e-CAC para que resolva essa tarefa de forma satisfátoria.

## Ações feitas

Para isso ele precisa acessar o site do e-CAC, logar com sua conta GOV, após o login, na tela inicial, Escolheu a aba "cadastros" e logo em nas opções que envolvem CPF ele escolhe a alteração de endereço, já na tela de alteração ele escolhe que o novo endereço será no Brasil, logo em seguida ele coloca seu novo CEP, o sistema abre caixas de texto para ele preencher os detalhes de seu novo endereço, após o preenchimento ele clica em atualizar finalizando sua tarefa.

---

## Cenário 2 - Baixar o comprovante de CPF 

## Contexto 

Para finalizar um cadastro em um Curso, [Roberto Silva](../Perfil%20de%20Usuários/pu.md) precisa encaminhar um comprovante de seu CPF, para isso, irá usar o sistema do e-CAC para que consiga fazer isso de forma simples e rápida.

## Ações Feitas

Para isso ele precisa acessar o site do e-CAC, logar com sua conta GOV, após o login, na tela inicial, Escolheu a aba "cadastros" e logo em nas opções que envolvem CPF ele escolhe a opção "comprovante de CPF", já na tela aparece os dado de Roberto assim como uma opção de impressão, na qual ele pode, após clicar, fazer o download de seu comprovante, terminando sua tarefa.

---

## Cenário 3 - Consulta de pendências na Malha Fina do IRPF

## Contexto 
Após receber um aviso por e-mail sobre uma possível inconsistência em sua declaração anual, [Ana Souza](../Personas/Elenco_de_personas.md) fica preocupada com a possibilidade de pagar multas. Ela deseja verificar exatamente qual foi o erro apontado pela Receita Federal para providenciar a correção. Para isso, ela acessa o portal e-CAC buscando clareza e orientação sobre o problema.

## Ações Feitas
Ana acessa o portal e-CAC e realiza a autenticação utilizando sua conta gov.br nível prata. No menu principal, ela clica na aba "Declarações e Demonstrativos" e seleciona a opção "Meu Imposto de Renda (Extrato da DIRPF)". O sistema a redireciona para um novo painel, onde ela seleciona o ano-calendário correspondente à declaração com problema. Ela clica na seção "Pendências de Malha", e o sistema exibe detalhadamente a divergência nos valores de despesas médicas informadas. Ana lê a notificação, entende o que precisa ser ajustado e desloga do sistema com a informação necessária para fazer a declaração retificadora.

---

## Cenário 4 - Emissão de DARF para pagamento de cota do Imposto de Renda

## Contexto 
[Marcos Antônio](../Personas/Elenco_de_personas.md), um empreendedor que optou por parcelar o pagamento do seu Imposto de Renda em cotas mensais, percebeu que o vencimento da cota atual é amanhã, mas não consegue encontrar o boleto que havia salvo no computador. Ele precisa gerar um novo Documento de Arrecadação de Receitas Federais (DARF) atualizado urgentemente para evitar juros por atraso.
[Thiago Gomes](https://github.com/thgomxs)

## Ações Feitas
Marcos entra no site do e-CAC e faz o login pelo portal gov.br. Na página principal, ele localiza e clica na aba "Pagamentos e Parcelamentos". Em seguida, seleciona a opção "Consulta Comprovante de Pagamento - DARF, DAS, DAE e DJE". Como ele precisa pagar a cota vigente, navega até a opção de emitir o DARF do IRPF. O sistema lista suas cotas em aberto. Marcos seleciona a cota do mês atual, clica no botão "Emitir DARF" e o sistema gera automaticamente um arquivo PDF com o código de barras. Ele faz o download do arquivo, aliviado por ter conseguido o documento a tempo de pagar no aplicativo do seu banco.

---

## Cenário 5 - Minhas Dívidas e Pendências.

## Contexto 

Como um bom cidadão e que não gosta de "dever ninguém", [Leonardo Rodrigues](../Perfil%20de%20Usuários/pu.md) quer verificar se não possui nenhum débito com a Receita. Por recomendação de um amigo, irá usar o sistema do e-CAC para checar sua situação.

## Ações Feitas

Acessar o site do e-CAC; entrar com seu cadastro com sua conta GOV; Após o login, na tela inicial, Escolheu a aba "Consulta de Pendências - Situação Fiscal" e logo em nas opções que envolvem CPF ele escolhe a opção "comprovante de CPF"; Nesse momento, poderá checar, por meio de uma tabela disponibilizada pelo site, se há e quais são seus débitos com a Receita.

---

## Cenário 6 - Particpação em leilão da Receita Federal

## Contexto

[Ernesto Braz](..Personas/Elenco_de_personas.md), sempre em busca de novas formas de lucrar, soube por um conhecido que a Receita Federal realiza leilões de bens apreendidos com preços abaixo do mercado. Animado com a possibilidade, decide explorar o e-CAC por conta própria para descobrir como participar, sem recorrer de imediato à sua empresa de contabilidade.

## Ações Feitas

Ernesto acessa o portal e-CAC e realiza login com sua conta gov.br. Na tela inicial, sem pesquisar previamente, começa a explorar as abas disponíveis. Ele percorre rapidamente o menu principal e identifica a aba "Outros Serviços", onde localiza a opção relacionada a Leilões da Receita Federal. Ao clicar, o sistema exibe um painel unificado com todos os leilões em aberto, datas de encerramento, descrições dos lotes e links para edital. Ernesto visualiza de uma só vez os lotes disponíveis, filtra por categoria de bem e verifica os requisitos para lance. Satisfeito por ter encontrado tudo em uma única tela sem precisar navegar entre páginas, ele anota os leilões de interesse e decide entrar em contato com a contabilidade apenas para confirmar a parte documental antes de dar o lance.

---

## Cenário 7 - Consulta de rendimentos por responsável

## Contexto

[Luiza Martins](..Personas/Elenco_de_personas.md) começou a fazer alguns bicos como freelancer e percebeu que estavam sendo feitos descontos em seus pagamentos. Sem entender o motivo, comentou com sua mãe, que decidiu acessar o e-CAC em nome de Luiza para verificar os rendimentos informados por fontes pagadoras e esclarecer a situação — já que Luiza, por ter apenas 16 anos e pouca familiaridade com sistemas fiscais, não se sentiria segura navegando sozinha.

## Ações Feitas

A mãe de Luiza acessa o portal e-CAC utilizando as credenciais gov.br da própria Luiza, com o consentimento dela. Após o login, navega até a aba "Declarações e Demonstrativos" e seleciona a opção "Consulta de Informações de Rendimentos". O sistema exibe os rendimentos informados pelas fontes pagadoras de Luiza, com os valores recebidos e os impostos retidos na fonte. A mãe explica de forma simples para Luiza o que cada campo significa. Luiza entende que os descontos são retidos na fonte pela empresa que a contratou e que, dependendo do valor anual, poderá ter direito à restituição. A tarefa é concluída pela responsável, confirmando o perfil de anti-persona de Luiza: ela se beneficia da informação, mas não interage diretamente com o sistema. 

---

## Versionamento 

| Versão | Data | Descrição | Autor(es/as) | Revisor(es/as) |
| :--- | :--- | :--- | :--- | :--- |
| 1.0 | 01/05/2026 | Iniciação do documento e dos cenarios| [Heyttor Augusto](https://github.com/H3ytt0r62) | [Rafael Melatti](https://github.com/Romm-0) |
| 1.1 | 02/05/2026 | Adição dos cenários 3 e 4 | [Thiago Gomes](https://github.com/thgomxs) | - |
| 1.2 | 02/05/2026 | Adição dos cenários 5 | [João Morais](https://github.com/Blazemorales) | [Rafael Melatti](https://github.com/Romm-0) |
| 1.3 | 02/05/2026 | Adição dos cenários 6 e 7; pequenas correções; adição de rotas na [tabela](#tabela-de-contribuição) | [João Morais](https://github.com/Blazemorales) | [Rafael Melatti](https://github.com/Romm-0) |