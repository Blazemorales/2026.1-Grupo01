## Introdução

Este documento apresenta o relato detalhado da construção e validação do protótipo de alta fidelidade referente ao reprojeto do portal e-CAC (Centro Virtual de Atendimento ao Contribuinte). Desenvolvido com o intuito de propor uma alternativa de design mais moderna, minimalista e centrada na experiência do usuário, o protótipo materializa as soluções de interface idealizadas nas etapas anteriores do projeto, refinando as interações com base nos resultados obtidos nas avaliações de baixa e média fidelidade.

O foco desta etapa é documentar o processo de avaliação do sistema com usuários reais, verificando a usabilidade e a eficiência do novo modelo proposto. Durante as sessões de validação, foram testadas funcionalidades essenciais do portal, como a alteração de endereço, o pagamento de pendências, a emissão de certidões, os lances em leilões digitais e a complementação de dados do CPF.

A seguir, são detalhados o registro de contribuição da equipe, a metodologia aplicada para as gravações e análises, os objetivos da avaliação, o perfil dos envolvidos e os resultados qualitativos extraídos da interação dos participantes com o protótipo final.

### Tabela de contribuição

| Autor | Análises realizadas | Data |
| :--- | :--- | :--- |
| [Heyttor Augusto](https://github.com/H3ytt0r62) | Iniciação do documento e construção da função de [troca de endereço](#1-alteracao-do-endereco) do projeto | 15/06/2026 |
| [João Morais](https://github.com/Blazemorales)  | Inclusão da função [Minhas Pendências](#2-minhas-pendencias) e adequação do documento com o [planejamento dos resultados](./planejamento_resultado_alta_fidelidade.md) | 15/06/2026 |
| [Rafael Melatti](https://github.com/Romm-0) | Inclusão da função de [Lance no Leilão Digital](#4-lance-no-leilao-digital-da-receita-federal) e documentação dos resultados observados na validação | 16/06/2026 |
| [Lucas Gabriel](https://github.com/lucaszg-g) | Inclusão da função de [Complementar CPF](#5-complementar-cpf) | 16/06/2026 |
| [Thiago Gomes](https://github.com/thgomxs) | Inclusão da função de [Emissão de Certidão Negativa de Débito](#3-emissao-de-certidao-negativa-de-debito) e documentação dos resultados observados na validação | 16/06/2026 |

## Metodologia

O atual projeto foi feito Usando as tecnologias next e React para a construção de um alternativa de desing ao portal Ecac, se beseando noque foi coletado nas outras entregas principalmente no [protótipo de papel](../nivel_2/prototipos.md) onde cada aluno escolheu uma função para representar se utilizando de um versão alternativa preferida por usuários de acordo com os resultados obtidos anteriormente.
Para a análise da validação da etapa com usuários, foram feitas gravaçãos com usuários de acordo com o [perfil de usuário](../../analise%20de%20requisitos/Perfil%20de%20Usuários/pu.md) estabelicido como um dos perfis de usuário primário. Cada membro ficou responsavel por analisar sua própia gravação e relatar os dados e informações importantes a respeito do site que os usuários relatassem. Com relação ao [planejamento dos resultados](./planejamento_resultado_alta_fidelidade.md), houve apenas uma alteração. Trocamos os tópicos [problemas encontrados](#listar-os-problemas-de-usabilidade-top1) e [tarefas executadas pelos participantes](#tarefas-executadas-pelos-participantes-top2) de lugar, por questão de contexto. Primeiro, listamos quais foram os problema encontrados no e-CAC atual, para depois, mostrarmos as soluções que criamos e quais as opiniões dos participantes a respeito do reprojeto do e-CAC, nosso modelo.

## Objetivos da Avaliação

- Os objetivos da avaliação, baseados no livro de BARBOSA (2021, p. ) foram:

1. Identificar problemas de interação e interface na plataforma atual do e-CAC

2. Propor Ideias e Alternativas de Design, buscando corrigir os problemas identificados pelos usuários e cumprir com as expectativas dos usuários.

## Protótipo de Alta Fidelidade - Breve Descrição

O nosso protótipo foi feito com o objetivo de ter:

1. Design minimalista e ocupação eficiente da tela;
2. Paleta que remeta ao site do e-CAC;
3. Menor número de cliques para o usuário cumprir suas metas;
4. Fornecer feedbacks ao usuários de forma constante;

## Número e Perfil dos Avaliadores e Participantes

---

Avaliadores:

1. Perfil dos Avaliadores: Estudantes de Engenharia de Software com conhecimento sobre Interação Humano-Computador
2. Número de Avaliadores: 3

Participantes:

1. Perfil dos Participantes:

   1.1 Participante 1: Estudante de Engenharia Eletrônica, com conhecimento avançado em computação (navegação em site). Nçao declara imposto de renda
   1.2 Participante 2: Funcionária da Fundação Universidade de Brasília. Declara imposto de renda. Possui conhecimento de computação (navegação em site e experiência com plataformas fiscais semelhantes)
   1.3 Participante 3: a preencher

2. Número de Participantes: 3

---

## Listar os Problemas de Usabilidade {#top1}

Os principais problemas encontrados, e que foram, alterados, podem ser vistos em [Elicitação de problemas no e-CAC por meio de brainstorming](../../analise%20de%20requisitos/Brainstorming/Reunião/brainstorming.md)

## Tarefas Executadas pelos Participantes {#top2}

### Funções

---

#### 1. Alteração do endereço

A função implementada pelo aluno [Heyttor Augusto](https://github.com/H3ytt0r62) tem como o objetivo simular a troca de endereço vinculado ao CPF do usuário.

**Vídeo da validação**

<iframe width="560" height="315" src="https://www.youtube.com/embed/5fmoHHdgpQU?si=DiMbLWLvV7m1tNsn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**Local** : Prédio UED da FCTE
**Horario**: 10:10 as 10:30

**Participantes**

- [Heyttor Augusto](https://github.com/H3ytt0r62): Análise do feedback coletado e documentação dos dados obtidos
- [Thiago Gomes](https://github.com/thgomxs): Anotações importantes sobre o uso do site
- [João Morais](https://github.com/Blazemorales) : Entrevistador
- [Rafael Melatti](https://github.com/Romm-0): Gravação do vídeo e edição
- João Gabriel: Usuário convidado a participar da validação

**Informações importantes**

- O usuário aprovou as respostas rapidas do protótipo.
- Não houve problemas na navegação.
- O usuário estranhou a falta de busca automatica de CEP 
- O usuários estranhou a falta de informações sobre o CEP antes da confirmação de troca, algo como um alem da mensagem de confirmação, uma mensagem abaixo informando em qual localização o CPF será vinculado

---

#### 2. Minhas Pendências

A função implementada pelo aluno [João Morais](https://github.com/Blazemorales) tem como o objetivo simular o pagamento de uma multa de R$187,63 por não declarar o Imposto de Renda. O usuário deverá: Fazer a declaração do Imposto de Renda; Obter o boleto; e Enviar o comprovante do boleto.

**Vídeo da validação**

<iframe width="560" height="315" src="https://www.youtube.com/embed/QCWkc0I8L9o?si=rwA765Jd0g6yJR5l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**Local** : Prédio UED da FCTE
**Horario**: 10:10 as 10:30

**Participantes**

- [Heyttor Augusto](https://github.com/H3ytt0r62): Análise do feedback coletado e documentação dos dados obtidos
- [Thiago Gomes](https://github.com/thgomxs): Providenciar equipamento e apoio na edição de vídeo
- [João Morais](https://github.com/Blazemorales) : Entrevistador
- [Rafael Melatti](https://github.com/Romm-0): Gravação do vídeo e edição
- João Gabriel: Usuário convidado a participar da validação

**Informações importantes**

- A participante aprovou as respostas rápidas e a clareza da plataforma.
- Não houve problemas na navegação, e nem houve o uso de auxílio do entrevistador.

---

#### 3. Emissão de Certidão Negativa de Débito

A função implementada pelo aluno [Thiago Gomes](https://github.com/thgomxs) tem como objetivo simular a emissão de uma Certidão Negativa de Débito (CND) a partir da consulta da situação fiscal do contribuinte. O usuário deverá: acessar a área de certidões; aguardar a verificação automática da situação fiscal; conferir os dados cadastrais; e baixar a certidão caso não existam pendências. Caso exista alguma pendência impeditiva, o sistema deve informar o motivo e direcionar o usuário para a regularização.

**Vídeo da validação**

<iframe width="560" height="315" src="https://www.youtube.com/embed/7yypFm10uOA?si=0mSkMo3cEVWheSOS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**Local** : Prédio UED da FCTE
**Horario**: 10:10 as 10:30

**Participantes**

- [Heyttor Augusto](https://github.com/H3ytt0r62): Apoio na observação do comportamento do usuário e registro de pontos de atenção
- [Thiago Gomes](https://github.com/thgomxs): Análise do feedback coletado e documentação da função validada
- [João Morais](https://github.com/Blazemorales) : Entrevistador
- [Rafael Melatti](https://github.com/Romm-0): Gravação do vídeo e edição
- João Gabriel: Usuário convidado a participar da validação

**Informações importantes**

- A participante compreendeu rapidamente o fluxo direto de emissão da certidão, principalmente por não precisar selecionar o mesmo serviço duas vezes.
- O feedback de carregamento durante a consulta da situação fiscal foi considerado claro e ajudou a indicar que o sistema estava processando os dados.
- Não houve dificuldade de navegação. A participante também destacou como positivo o alerta com a pendência impeditiva e o atalho para regularização.

---

#### 4. Lance no Leilão Digital da Receita Federal

A função implementada pelo aluno [Rafael Melatti](https://github.com/Romm-0) tem como objetivo simular O caminho do usuário até a ação de dar um lance no leilão e a função em si. O usuário deverá: acessar a área do leilão digital; escolher um card de produto ou ir para um leilão aberto; caso tenha escolhido o leilão aberto, dentro dessa aba deve ser escolhido um leilão; adicionar um valor acima do mínimo para mandar o lance; enviar o lance.

**Vídeo da validação**

<iframe width="560" height="315" src="https://www.youtube.com/embed/ONHEi3rvCHs?si=BHD0sGbpAjK02Ozj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**Local** : Prédio UED da FCTE
**Horario**: 10:10 as 10:30

**Participantes**

- [Heyttor Augusto](https://github.com/H3ytt0r62): Apoio na observação do comportamento do usuário e registro de pontos de atenção
- [Thiago Gomes](https://github.com/thgomxs): Análise do feedback coletado e documentação da função validada
- [João Morais](https://github.com/Blazemorales) : Entrevistador
- [Rafael Melatti](https://github.com/Romm-0): Gravação do vídeo e edição
- João Gabriel: Usuário convidado a participar da validação

**Informações importantes**

- O participante entendeu o fluxo e não demonstrou confusão durante o processo.
- A função de favorito agradou o participante.
- O participante conseguiu compreender que os dados eram genéricos e não mudariam de acordo com a decisão dele.
- Os filtros de categoria foram considerados uma boa funcionalidade.

#### 5. Complementar CPF

A função implementada pelo aluno [Lucas Gabriel](https://github.com/lucaszg-g) tem como objetivo simular o caminho do usuário até a ação complementar suas informações vinculadas a seu CPF.

**Vídeo da validação**

<iframe width="560" height="315" src="https://www.youtube.com/embed/refYeSfUDPY?si=VApDC7-3eGfu75N1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**Local** : Prédio UED da FCTE
**Horario**: 10:10 as 10:30

**Participantes**


- [Thiago Gomes](https://github.com/thgomxs): Gravação da validação
- [Lucas Gabriel](https://github.com/lucaszg-g): Entrevistador, Edição de vídeo, escrita e análise do dados coletados
- João Gabriel: Usuário convidado a participar da validação

**Informações importantes**

- O participante entendeu o fluxo e não demonstrou confusão durante o processo.
- O usuário conseguiu localizar a função com facilidade.

---

## Projeto de alta fidelidade

O projeto pode ser visualizada clicando [aqui](https://altafidelidade.vercel.app) sua ideia é propor uma alternativa de desing mais morderna para o E-cac tomando como base sites gerais do governo principalmente o site da receita federal.

## Agradecimentos

Agradecemos à IA generativa [Claude](https://claude.ai/new) by Antrophic, que nos ajudou a correção de codigos em arquivos md e a entender alguns membros sem muita experiencia com a linguagem de programação usada para a construção do protótipo a entender como a linguagem funciona

## Bibliografia

- BARBOSA, S. D. J.; SILVA, B. S. da. Interação humano-computador. Rio de Janeiro: Elsevier, 2010.
- BARBOSA, S. D. J.; SILVA, B. S. da. Interação humano-computador. Rio de Janeiro: Elsevier, 2021.
- EDITOR COGNITIOS. El usuario: perfil, tipos y características - Cognitios - Diseño y tecnología. Disponível em: <https://www.cognitios.co/blog/el-usuario-perfil-tipos-y-caracteristicas/>. Acesso em: 26 maio. 2026.

## historico de versão

| Versão | Data | Descrição | Autor(es/as) | Revisor(es/as) |
| :--- | :--- | :--- | :--- | :--- |
| 1.0 | 15/06/2026 | Iniciação do documento e inclusão do tópico [Alteração do Endereço](#1-alteracao-do-endereco) | [Heyttor Augusto](https://github.com/H3ytt0r62) | [João Morais](https://github.com/Blazemorales) |
| 1.1 | 16/06/2026 | Inclusão de tópicos no relatório | [João Morais](https://github.com/Blazemorales) | [Heyttor Augusto](https://github.com/H3ytt0r62) |
| 1.2 | 16/06/2026 | Inclusão da função de [Emissão de Certidão Negativa de Débito](#2-minhas-pendencias) | [Thiago Gomes](https://github.com/thgomxs) | [João Morais](https://github.com/Blazemorales) |
| 1.3 | 16/06/2026 | Inclusão da função de [Lance no Leilão Digital](#4-lance-no-leilao-digital-da-receita-federal) | [Rafael Melatti](https://github.com/Romm-0) | [Thiago Gomes](https://github.com/thgomxs) |
|1.4| 16/06/2026 | adição da complementação do CPF | [Lucas Gabriel](https://github.com/lucaszg-g)|[Heyttor Augusto](https://github.com/H3ytt0r62)| 
|1.5| 16/06/2026 | Correções gerais e adição da [Introdução](#introdução) | [Lucas Gabriel](https://github.com/lucaszg-g)| - | 