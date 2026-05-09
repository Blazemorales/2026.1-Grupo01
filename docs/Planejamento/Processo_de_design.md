# Introdução

O design é um processo fundamentalmente composto por três atividades: a análise da situação existente (ou identificação do problema), a criação (síntese) de uma intervenção e, por fim, a avaliação dessa intervenção, seja ela apenas projetada ou já implementada no contexto atual. Cada processo de design especifica detalhadamente as atividades básicas, estabelecendo o método de execução de cada atividade, a ordem sequencial em que devem ocorrer, quais atividades podem ser iteradas e os motivos dessa repetição e os artefatos utilizados (consumidos) e gerados (produzidos) em cada etapa. [¹](#anexos)

Em vista disso, os processos de design em Interação Humano-Computador (IHC) configuram-se como abordagens sistemáticas e interativas que possibilitam a execução estruturada dessas atividades, garantindo que as soluções desenvolvidas atendam de fato às necessidades e expectativas dos usuários. Dentre as diversas metodologias consolidadas na área, um desses processos de grande relevância é o modelo de Ciclo de Vida da Engenharia de Usabilidade proposto por Deborah Mayhew, que será detalhado ao longo desta seção.

---

# Principais Modelos

A literatura da área apresenta uma variedade de modelos de processo de design. Esses modelos detalham as atividades básicas de forma distinta, enfatizando diferentes sequências, perspectivas e artefatos. Entre eles, destacam-se os principais processos de design propostos:

---

## Ciclo de Vida Simples

É um ciclo básico focado no usuário e composto por quatro atividades interativas <strong>[²](#anexos) </strong>: identificar necessidades e definir requisitos, realizar o (re)design conceitual, construir uma versão interativa que simula o funcionamento da interface, e avaliar a solução proposta, ilustrado na figura 1. 
Figura 1 - Ciclo de vida simples.
![imagem1](../images/planejamento/processos-de-design/Figura%201%20-%20Ciclo%20de%20vida%20simples.png)
Fonte: BARBOSA (2010, p. 114)

---

## Ciclo de Vida em Estrela

Desenvolvido no início da década de 1990, possui seis atividades que estão todas interligadas pela avaliação contínua, que é a atividade central do modelo <strong>[³](#anexos) </strong>. É bastante flexível, pois o designer não precisa seguir uma sequência estrita e pode iniciar o processo a partir de qualquer atividade, dependendo do que já estiver disponível no início do projeto, exemplificado na figura 2. 

Figura 2 - Ciclo de vida em estrela.

![imagem 2](../images/planejamento/processos-de-design/Figura%202%20-%20Ciclo%20de%20vida%20em%20estrela..png)

Fonte: BARBOSA (2010, p. 114)

---

## Engenharia de Usabilidade de Nielsen

Propõe um conjunto de dez atividades que devem ocorrer durante todo o ciclo de vida do produto, priorizando os estágios iniciais, antes mesmo de a interface ser projetada. Esse modelo envolve desde conhecer o usuário e analisar sistemas concorrentes até definir metas métricas de usabilidade (fatores de qualidade com valores aceitáveis e ideais) e realizar testes empíricos baseados em protótipos e designs paralelos [⁴](#anexos). 

---

## Engenharia de Usabilidade de Mayhew

Com uma visão holística, organiza o processo de design em três grandes fases iterativas: análise de requisitos, design/avaliação/desenvolvimento e instalação, ilustrado na figura 3. O seu diferencial é propor a concepção da solução de IHC em três níveis de detalhamento: primeiro o modelo conceitual, depois os padrões de design de tela, e por fim o design detalhado da interface. [⁵](#anexos)

Figura 3 - Ciclo de vida para a engenharia de usabilidade (adaptado de Mayhew, 1999).
![imagem3](../images/planejamento/processos-de-design/Figura%203%20-%20Ciclo%20de%20vida%20para%20a%20engenharia%20de%20usabilidade.png)
Fonte: BARBOSA (2010, p. 120)

---

## Design Contextual

Orientado a compreender as necessidades dos usuários de forma profunda por meio de uma investigação no próprio ambiente real de trabalho. Utiliza diagramas de afinidade e vários modelos de trabalho (de fluxo, sequência, artefato, cultura e físico) para organizar, registrar e compartilhar o conhecimento adquirido com a equipe. [⁶](#anexos)

---

## Design Baseado em Cenários

Utiliza cenários (histórias narrativas sobre pessoas executando atividades) como a representação fundamental ao longo de todo o processo de concepção, ilustrado na imagem 4. A equipe inicia com cenários que relatam os problemas atuais e os transforma iterativamente em cenários de atividade, cenários de informação e, por último, cenários de interação detalhados. [⁷](#anexos)


Figura 4 - Atividades do design baseado em cenários.
    
![imagem 4](../images/planejamento/processos-de-design/Figura%204%20-%20Atividades%20do%20design%20baseado%20em%20cenários..png)

Fonte: BARBOSA (2010, p. 122)


---

## Design Dirigido por Objetivos

Diferencia-se por tentar explorar o máximo das possibilidades tecnológicas para apoiar os objetivos finais dos usuários de forma inovadora e eficiente. O foco é não limitar o novo sistema apenas a replicar a mesma sequência de tarefas ou a maneira como o trabalho era feito no passado. O processo, ilustrado na figura 5, possui seis fases: pesquisar, modelar, definir requisitos, projetar, refinar e manter. [⁸](#anexos)


Figura 5 - Processo de design dirigido por objetivos (adaptado de (Cooper et al., 2014, p. 23)).
    
![imagem 5](../images/planejamento/processos-de-design/Figura%205%20-%20Processo%20de%20design%20dirigido%20por%20objetivos%20(adaptado%20de%20(Cooper%20et%20al.,%202014,%20p.%2023))..png)
    
Fonte: BARBOSA (2010, p. 124)

---

## Design Centrado na Comunicação

Baseado na teoria da Engenharia Semiótica, ilustrada na imagem 6, compreende a interação como um processo de comunicação entre o designer e o usuário através da interface. O principal objetivo é produzir um sistema com alta comunicabilidade, onde a "metacomunicação" do designer seja clara, norteando os esforços de design por um conjunto de perguntas que buscam antecipar e responder às possíveis dúvidas típicas dos usuários durante o uso (como "O que é isto?" ou "Como faço isto?").  [⁹](#anexos)

Figura 6 - Design centrado na comunicação.

![imagem 6](../images/planejamento/processos-de-design/Figura%206%20-%20Design%20centrado%20na%20comunicação..png)

Fonte: BARBOSA (2010, p. 126)


---

# Escolha do processo

A escolha do ciclo de vida para a engenharia de usabilidade de Mayhew foi motivada principalmente pela falta de experiência prévia do grupo aliada à alta especificidade e estruturação deste modelo.

Como avaliar uma interface exige capacidade analítica e conhecimento técnico, adotar modelos mais flexíveis ou abstratos poderia gerar confusão, retrabalho ou a omissão de testes para iniciantes. Nesse cenário, a visão holística e estruturada de Mayhew atua como um verdadeiro roteiro guiado.

A especificidade do modelo é o nosso grande diferencial: ele não deixa margem para "achismos", pois prescreve de forma didática exatamente o que deve ser avaliado e quando. A exigência do método de definir metas de usabilidade claras logo no início e a criação de guias de estilo fornecem à equipe ferramentas concretas de verificação Isso reduz as incertezas do grupo e fornece a segurança metodológica necessária, garantindo que a avaliação seja conduzida com rigor técnico do início ao fim, mesmo por quem está dando os primeiros passos na área de IHC. [¹⁰](#anexos)

---

## Referências

BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. Métodos de Avaliação de IHC. In: BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. <strong> Interação Humano-Computador.</strong> 1. ed. Rio de Janeiro: Campus, 2010.

<br>

---

## Bibliografia

- BARBOSA, S. D. J.; SILVA, B. S. da. **Interação humano-computador**. Rio de Janeiro: Elsevier, 2010.

# Anexos


Figura 7 – Seção do livro que cita os processos de design de IHC
    
![imagem 7](../images/planejamento/processos-de-design/Figura%207%20–%20Seção%20do%20livro%20que%20cita%20os%20processos%20de%20design%20de%20IHC.png)
    
Fonte: BARBOSA (2010, p. 112)


Figura 8 - Seção do livro que cita o ciclo de vida simples

![imagem 8](../images/planejamento/processos-de-design/Figura%208%20-%20Seção%20do%20livro%20que%20cita%20o%20ciclo%20de%20vida%20simples.png)

Fonte: BARBOSA (2010, p. 114)


Figura 9 - Seção do livro que cita o ciclo de vida em estrela.
    
![imagem 9 ](../images/planejamento/processos-de-design/Figura%209%20-%20Seção%20do%20livro%20que%20cita%20o%20ciclo%20de%20vida%20em%20estrela..png)
    
Fonte: BARBOSA (2010, p. 115-116)


Figura 10 - Seção do livro que cita o ciclo de vida em estrela.
    
![imagem 10](../images/planejamento/processos-de-design/Figura%2010%20-%20Seção%20do%20livro%20que%20cita%20o%20ciclo%20de%20vida%20em%20estrela..png)
    
Fonte: BARBOSA (2010, p. 116-119)



Figura 11 - Seção do livro que cita a engenharia de usabilidade de Mayhew.
    
![imagem 11](../images/planejamento/processos-de-design/Figura%2011%20-%20Seção%20do%20livro%20que%20cita%20a%20engenharia%20de%20usabilidade%20de%20Mayhew..png)
    
Fonte: BARBOSA (2010, p. 119-121)

Figura 12 - Seção do livro que cita Design Contextual.
    
![imagem 12](../images/planejamento/processos-de-design/Figura%2012%20-%20Seção%20do%20livro%20que%20cita%20Design%20Contextual.png)
    
Fonte: BARBOSA (2010, p. 121-122)



Figura 13 - Seção do livro que cita o design baseado em cenários.

![imagem 13](../images/planejamento/processos-de-design/Figura%2013%20-%20Seção%20do%20livro%20que%20cita%20o%20design%20baseado%20em%20cenários..png)
    
Fonte: BARBOSA (2010, p. 122-123)



Figura 14 - Seção do livro que cita o design dirigido por objetivos.

![imagem 14](../images/planejamento/processos-de-design/Figura%2014%20-%20Seção%20do%20livro%20que%20cita%20o%20design%20dirigido%20por%20objetivos..png)
    
Fonte: BARBOSA (2010, p. 123-125)



Figura 15 - Seção do livro que cita o design centrado na comunicação.
    
![imagem 15](../images/planejamento/processos-de-design/Figura%2015%20-%20Seção%20do%20livro%20que%20cita%20o%20design%20centrado%20na%20comunicação..png)
    
Fonte: BARBOSA (2010, p. 125-127)


## Versionamento


|Versão | Data | Descrição | Autor(es/as) | Revisor(es/as) |
| -----| ------| ----------| -------------| ---------------|
| 1.0 | 11/04/2026| Iniciação do documento | [Lucas Gabriel](https://github.com/lucaszg-g) | - |
| 1.1 | 11/04/2026 | Adição do versionamento | [Rafael Melatti](https://github.com/Romm-0) | [Giovanna](https://github.com/giovannabrito19), [Heyttor](https://github.com/H3ytt0r62), [João](https://github.com/Blazemorales), [Lucas](https://github.com/lucaszg-g), [Rafael](https://github.com/Romm-0), [Thiago](https://github.com/thgomxs) e [Yasmim](https://github.com/YasminDayrell) |
| 1.2 | 11/04/2026 | Correção das imagens | [Heyttor augusto](https://github.com/H3ytt0r62) | - |
| 1.3 | 14/04/2026 | Correção das referências  | [Yasmin Dayrell](https://github.com/YasminDayrell) | - |
| 1.4 | 14/04/2026 | Correção das imagens  | [Lucas Gabriel](https://github.com/lucaszg-g) | - |
| 1.5 | 14/04/2026 | Mudança de "equipe" para a lista dos membros | [Rafael Melatti](https://github.com/Romm-0) | - |
| 1.6 | 14/04/2026 | Mudança na estrutura da pagina, mudança mudanças no texto e correção no versionamento   | [Lucas Gabriel](https://github.com/lucaszg-g) | - |
