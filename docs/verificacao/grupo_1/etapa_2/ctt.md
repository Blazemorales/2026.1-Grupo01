## Verificação do Grupo 1

| Número do item | Item de verificação | Autor(es) | Cumpriu / Não cumpriu / Não se aplica |
|---|---|---|---|
| 1 | O diagrama contempla as "tarefas do usuário", indicando adequadamente as ações realizadas exclusivamente fora do sistema? Exemplo: Para marcar uma reunião, o usuário verifica os seus compromissos e os compromissos de seus colegas de trabalho presencialmente.  | - | Não se aplica|
| 2 | O diagrama inclui "tarefas do sistema", representando claramente os processamentos realizados pelo sistema sem que haja interação direta com o usuário?  | - | Não se aplica |
| 3 | O diagrama identifica as "tarefas interativas", destacando formalmente os momentos em que ocorrem os diálogos entre o usuário e o sistema? | - | Cumpriu |
| 4 | O modelo utiliza "tarefas abstratas", que não são tarefas em si, mas uma representação de composição de tarefas com o intuito de auxiliar na decomposição do diagrama? Exemplo: O usuário quer marcar uma reunião. Essa tarefa é muito genérica para ser realizada como uma só ação. | - | Cumpriu |
| 5 | A estrutura do modelo de tarefas respeita a leitura hierárquica e a decomposição em árvore, estabelecendo corretamente a regra de que uma tarefa de nível superior só é considerada realizada quando as suas respectivas subtarefas vinculadas também tiverem sido concluídas? | - | Cumpriu |
| 6 | As relações de ativação (T1 >> T2) foram devidamente representadas e utilizadas no modelo, garantindo que a segunda tarefa (T2) só possa iniciar estritamente após a primeira tarefa (T1) terminar? | - | Cumpriu |
| 7 | O modelo define corretamente as relações de ativação com passagem de informação (T1 []>> T2), especificando que, além de T2 só poder ser iniciada após T1, a informação produzida pela primeira tarefa é passada obrigatoriamente para a segunda? | - | Cumpriu |
| 8 | A relação de escolha ou tarefas alternativas (T1 [] T2) foi devidamente representada para indicar caminhos onde duas tarefas estão habilitadas num momento, mas com a restrição de que, uma vez que uma delas é iniciada, a outra é desabilitada imediatamente? | - | Não se aplica |
| 9 | O artefato especifica claramente a relação de tarefas concorrentes (T1 \|\|\| T2), indicando de maneira correta os casos em que as tarefas podem ser realizadas ao mesmo tempo ou em qualquer ordem de maneira independente? | - | Não se aplica |
| 10 | O diagrama utiliza de forma bem distinguida a relação de tarefas concorrentes e comunicantes (T1 \|\[\]\| T2), nas quais as tarefas, além de poderem ser realizadas em qualquer ordem ou ao mesmo tempo, trocam informações entre si durante a execução? | - | Não se aplica |
| 11 | A relação de tarefas independentes (T1 \|=\| T2) está mapeada no modelo para especificar os casos em que as tarefas podem ser realizadas em qualquer ordem, mas com a restrição de que, iniciada uma delas, esta precisa terminar por completo para que a outra possa ser iniciada? | - | Não se aplica |
| 12 | O diagrama representa de forma adequada a relação de desativação (T1 [> T2), demonstrando as situações e relações entre atividades onde a primeira tarefa (T1) é completamente interrompida e abortada pela segunda (T2)? | - | Não se aplica  |
| 13 | A relação de suspensão/retomada (T1 \|> T2) é aplicada de maneira correta no modelo para especificar quando uma tarefa (T1) pode ser interrompida temporariamente por outra (T2) e retomada exatamente do ponto em que parou assim que a tarefa interruptora terminar? | - | Não se aplica |
| 14 | O diagrama CTT utiliza todos os elementos hierárquicos e relacionais descritos pela literatura de modo a aumentar expressivamente a notação gráfica para avaliar o design de IHC? | - | Cumpriu  |
| 15 | O modelo CTT finalizado utiliza a representação das tarefas interativas, do sistema e do usuário de maneira perfeitamente integrada, de forma que funcione como uma representação avançada e completa da solução de design da interação? | - | Cumpriu |

## **Versionamento**

| Versão | Data | Descrição | Autor(es/as) | Revisor(es/as) |
|--------|------|-----------|--------------|----------------|
| 1.0 | 01/05/2026 | Criação do documento | [Thiago Gomes](https://github.com/H3ytt0r62) | [Heyttor](https://github.com/H3ytt0r62), [João](https://github.com/Blazemorales), [Lucas](https://github.com/lucaszg-g) e [Rafael](https://github.com/Romm-0) | 
| 1.1 | 05/05/2026 | Adicao de espacos de autor | [João](https://github.com/Blazemorales) | 