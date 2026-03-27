# Fixação JS

Projeto de fixação em JavaScript, com foco em lógica de programação, manipulação do DOM e cálculos aplicados a rotinas de RH.

A aplicação funciona como um pequeno portal administrativo com três ferramentas:

- cálculo de horas extras;
- simulação de aumento salarial;
- cálculo de custo de transporte fretado.

## Visão Geral

A página inicial centraliza o acesso aos módulos do projeto. Cada módulo possui uma interface própria, desenvolvida com HTML, JavaScript e Tailwind CSS via CDN, permitindo testar os cálculos diretamente no navegador.

O projeto foi organizado para praticar:

- captura de dados de formulários;
- validação básica de entradas;
- cálculos com regras condicionais;
- exibição de resultados na tela;
- atualização de histórico de operações;
- uso de data e hora em tempo real com JavaScript.

## Funcionalidades

### 1. Horas Extras

Calcula o valor total de horas extras com base em:

- salário bruto do colaborador;
- carga horária mensal de 200 horas;
- horas extras em dias úteis;
- horas extras em finais de semana.

Regras aplicadas:

- valor da hora = salário bruto / 200;
- horas extras em dias úteis = valor da hora x quantidade de horas;
- horas extras em finais de semana = valor da hora x quantidade de horas x 1,5.

### 2. Aumento Salarial

Simula o novo salário do funcionário de acordo com a faixa salarial informada.

Faixas de reajuste:

- até R$ 1.200,00: aumento de 16%;
- de R$ 1.200,01 até R$ 2.100,00: aumento de 13%;
- de R$ 2.100,01 até R$ 3.000,00: aumento de 10%;
- acima de R$ 3.000,00: aumento de 5%.

### 3. Transporte de Colaboradores

Calcula o custo mensal do transporte fretado com base em:

- quantidade de funcionários;
- quantidade de dias úteis no mês;
- taxa por funcionário, conforme a faixa.

Faixas de custo por funcionário:

- até 49 funcionários: R$ 4,50;
- de 50 a 99 funcionários: R$ 4,10;
- de 100 a 149 funcionários: R$ 3,80;
- 150 funcionários ou mais: R$ 3,60.

Fórmula utilizada:

- custo total = quantidade de funcionários x taxa por funcionário x dias úteis.

## Tecnologias Utilizadas

- HTML5
- JavaScript
- Tailwind CSS via CDN
- Google Fonts

## Estrutura do Projeto

```text
fixacao_JS/
|-- index.html
|-- readme.md
|-- horaExtra/
|   |-- index.html
|   |-- script.js
|-- aumentoSalario/
|   |-- index.html
|   |-- script.js
|-- transporteColaboradores/
|   |-- index.html
|   |-- script.js
```

## Como Executar

Como o projeto utiliza apenas arquivos estáticos, não é necessário instalar dependências.

1. Baixe ou clone este repositório.
2. Abra o arquivo `index.html` no navegador.
3. Acesse a ferramenta desejada pela página inicial.

Se preferir, você também pode abrir cada módulo individualmente pelos respectivos arquivos `index.html` dentro das pastas.

## Pontos de Aprendizado

Este projeto foi desenvolvido para reforçar conceitos de:

- funções em JavaScript;
- estruturas condicionais;
- operações matemáticas;
- formatação de moeda com `toLocaleString`;
- interação com elementos HTML usando `getElementById`;
- atualização dinâmica da interface.

## Melhorias Futuras

- corrigir problemas de acentuação em alguns textos;
- adicionar botão para limpar o histórico em todos os módulos;
- incluir validações visuais nos campos;
- salvar o histórico no `localStorage`;
- adicionar mais recursos de responsividade e acessibilidade.

## Autora

Projeto desenvolvido por Lorena.
