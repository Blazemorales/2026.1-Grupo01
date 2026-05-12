## Introdução

As metas de usabilidade são critérios de qualidade de uso priorizados para guiar tanto o design quanto a avaliação de sistemas interativos, permitindo que usuários específicos atinjam seus objetivos com eficácia, eficiência e satisfação.<br>

Ao definir indicadores mensuráveis para fatores como facilidade de aprendizado, recordação e segurança no uso, essas metas transformam expectativas subjetivas em parâmetros quantitativos claros. Elas funcionam como um alvo estratégico para o projeto, assegurando que o desenvolvimento foque nas reais necessidades de desempenho e bem-estar do público-alvo, evitando o problema do "usuário elástico" através de requisitos bem delimitados.<br>

A aplicação prática dessas metas envolve o estabelecimento de faixas de valores classificados como inaceitáveis, aceitáveis e ideais, o que possibilita verificar sistematicamente se o sistema atingiu o nível de qualidade pretendido.

---

## Metodologia

Para este artefato os alunos separam varias Metas de usabilidade descritas no livro para avaliar se elas são alcançadas pelo site as classificando com aceitáveis, parcialmente aceitáveis, parcialmente inaceitáveis ou inaceitáveis.

---

## Tabela de contribuição 

| Autor | Análises realizadas | Data |
| :--- | :--- | :--- |
| [Heyttor Augusto](https://github.com/H3ytt0r62) | [Análise da utilidade do site](#3-utilidade) | 11/05/2026 |
| [Rafael Melatti](https://github.com/Romm-0) | [Análise da segurança do site](#2-seguranca) | 11/05/2026 |
| [Thiago Gomes](https://github.com/thgomxs) | [Eficácia](#1-eficácia) | 11/05/2026 |

---

### 1. Eficácia

A meta de **Eficácia** avalia se o sistema permite que os usuários alcancem seus objetivos e concluam suas tarefas de forma correta e completa. Segundo a norma de requisitos de ergonomia ISO 9241-11, citada por BARBOSA e SILVA (2010, p. 17), a eficácia está relacionada com a capacidade de os usuários interagirem com o sistema para alcançar seus objetivos corretamente, conforme o esperado.

Com base nas análises realizadas ao longo do projeto, a eficácia do portal e-CAC pode ser classificada como **parcialmente aceitável**. 

Por um lado, o sistema cumpre seu propósito fundamental: de acordo com os relatos obtidos na [Entrevista](../Entrevista/Entrevista_Heyttor.md) e na etapa de [Brainstorming](../Brainstorming/Roteiro/Brainstorming.md), os usuários relatam conseguir concluir tarefas cruciais, como consultar pendências de CPF, declarar o Imposto de Renda e baixar boletos de devolução (DARF). Além disso, profissionais da área contábil e empresários (como evidenciado no [Elenco de Personas](../Personas/Elenco_de_personas.md)) dependem do sistema diariamente para suas rotinas de trabalho e conseguem atingir seus objetivos de negócio através da plataforma.

Por outro lado, essa eficácia apresenta grandes atritos para o cidadão comum. Como observado na justificativa do [site escolhido](../../Planejamento/site-escolhido.md), a plataforma exibe um fluxo de navegação confuso, excesso de jargões técnicos e dificuldades na correção de erros. Isso significa que, embora as funcionalidades existam e sejam operacionais, muitos usuários leigos não conseguem finalizar suas tarefas de forma autônoma. Esse cenário exige que os contribuintes recorram frequentemente a tutoriais externos ou à ajuda de especialistas (como ilustrado nas personas *Ana Souza* e *Carlos Oliveira*), o que impede que a eficácia da plataforma seja considerada totalmente aceitável para todos os públicos.

### 2. Segurança

A segurança de erros e recuperação no e-CaC foi considerada como inaceitável, já que após alguns testes com salvamento de dados sensíveis ou exclusão deles nenhuma confirmação foi forcenida. Devido ao risco dos testes por envolverem informações fiscais, eles não foram totalmente concluídos após verificar a falha.<br>

Em relação a segurança de erros, apenas uma reclamação constante foi encontrada na pesquisa, sendo ela a da "sessão expirada", também considerada inaceitável. Após 30 minutos de inatividade o e-CaC desconceta o usuário independende do que ele estava fazendo, fazendo com que tudo que foi feito na sessão seja perdido<br>

Em relação a parte da criptografia e segurança de dados, os dados fornecidos do tratamento são limitados. Após uma pesquisa a única informação encontrada foi em relação a segurança dos dados compartilhados com outras pessoas, normalmente escritórios de contabilidade, como pode ser visto [aqui](https://www.gov.br/pt-br/servicos/autorizar-o-compartilhamento-de-dados-fiscais)

### 3. Utilidade



### 4. Facilidade de aprendizado

De acordo com BARBOSA (2021, p. 29)<a class="ref-link" data-img="../../../../images/metas_sa/image.png" data-alt="Usabilidade">[ref.]</a>, **facilidade de aprendizado** trata-se do critério de usabilidade que avalia o tempo e o esforço necessários para o usuário aprender a utilizar o sistema. 

A partir do critério acima, nesse tópico, avaliaremos a facilidade de aprendizado do e-CAC. De acordo com o que foi obtido com os participantes do [brainstorming](../../analise%20de%20requisitos/Brainstorming/Reunião/brainstorming.md), mostrado no [vídeo](https://www.youtube.com/embed/Wx0HtX7lZ-4?si=CvNY8FguM0C8zjxU), os participantes demonstraram dificuldade em percorrer o e-CAC. Portanto, a **facilidade de aprendizado** do e-CAC foi considerada **ruim/péssima**, já que, pelo que foi discutido com os participantes, nem mesmo usuários que já usaram a plataforma e resolveram seus problemas, puderam completar suas atividades com facilidade. Inclusive, um dos particpantes, que nunca havia usado o sistema, mostrou grande dificuldade em navegar pelo sistema e realizar sua tarefa. 

Em resumo, a **Facilidade de Aprendizado** foi considerada **Ruim/Péssima**

### 5. Facilidade de recordação



### 6. Conclusão



---

## Bibliografia

- Portal E-cac, **Portal E-cac**,https://www.gov.br/receitafederal/pt-br/canais_atendimento/atendimento-virtual, Acesso em: 11/05/2026
- Serviços do E-cac, **GOV**,https://servicos.receita.fazenda.gov.br/Servicos/servicos-ecac/default.aspxl, Acesso em: 11/05/2026
- BARBOSA, S. D. J.; SILVA, B. S. da. **Interação humano-computador**. Rio de Janeiro: Elsevier, 2010.
- Fórum Contábeis, **Contábeis** https://www.contabeis.com.br/forum/tecnologia-contabil/146477/problemas-ao-acessar-o-e-cac/, Acesso em 11/05/2026

---

## Versionamento 

| Versão | Data | Descrição | Autor(es/as) | Revisor(es/as) |
| :--- | :--- | :--- | :--- | :--- |
| 1.0 | 11/05/2026 | Iniciação do documento | [Heyttor Augusto](https://github.com/H3ytt0r62) | [Rafael Melatti](https://github.com/Romm-0) |
| 1.1 | 11/05/2026 | Documentação de [segurança](#2-seguranca) e correções | [Rafael Melatti](https://github.com/Romm-0) | - |
| 1.2 | 11/05/2026 | Documentação da [eficácia](#1-eficácia) Eficácia | [Thiago Gomes](https://github.com/thgomxs) | - |