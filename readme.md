# Fixação JS

Projeto de fixação em JavaScript, com foco em lógica de programação, manipulação do DOM e cálculos aplicados a rotinas de RH.

A aplicação funciona como um pequeno portal administrativo com três ferramentas:

- Cálculo de horas extras;
- Simulação de aumento salarial;
- Cálculo de custo de transporte fretado.

## Visão Geral

A página inicial centraliza o acesso aos módulos do projeto. Cada módulo possui uma interface própria, desenvolvida com HTML, JavaScript e Tailwind CSS via CDN, permitindo testar os cálculos diretamente no navegador.

O projeto foi organizado para praticar:

- Captura de dados de formulários;
- Validação básica de entradas;
- Cálculos com regras condicionais;
- Exibição de resultados na tela;
- Atualização de histórico de operações;
- Uso de data e hora em tempo real com JavaScript.

## Funcionalidades

### 1. Horas Extras

Calcula o valor total de horas extras com base em:

- Salário bruto do colaborador;
- Carga horária mensal de 200 horas;
- Horas extras em dias úteis;
- Horas extras em finais de semana.

Regras aplicadas:

- Valor da hora = salário bruto / 200;
- Horas extras em dias úteis = valor da hora x quantidade de horas;
- Horas extras em finais de semana = valor da hora x quantidade de horas x 1,5.

### 2. Aumento Salarial

Simula o novo salário do funcionário de acordo com a faixa salarial informada.

Faixas de reajuste:

- Até R$ 1.200,00: aumento de 16%;
- De R$ 1.200,01 até R$ 2.100,00: aumento de 13%;
- De R$ 2.100,01 até R$ 3.000,00: aumento de 10%;
- Acima de R$ 3.000,00: aumento de 5%.

### 3. Transporte de Colaboradores

Calcula o custo mensal do transporte fretado com base em:

- Quantidade de funcionários;
- Quantidade de dias úteis no mês;
- Taxa por funcionário, conforme a faixa.

Faixas de custo por funcionário:

- Até 49 funcionários: R$ 4,50;
- De 50 a 99 funcionários: R$ 4,10;
- De 100 a 149 funcionários: R$ 3,80;
- 150 funcionários ou mais: R$ 3,60.

Fórmula utilizada:

- Custo total = quantidade de funcionários x taxa por funcionário x dias úteis.

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

- Funções em JavaScript;
- Estruturas condicionais;
- Operações matemáticas;
- Formatação de moeda com `toLocaleString`;
- Interação com elementos HTML usando `getElementById`;
- Atualização dinâmica da interface.

## Melhorias Futuras

- Corrigir problemas de acentuação em alguns textos;
- Adicionar botão para limpar o histórico em todos os módulos;
- Incluir validações visuais nos campos;
- Salvar o histórico no `localStorage`;
- Adicionar mais recursos de responsividade e acessibilidade.

## Autora

Projeto desenvolvido por Lorena.
