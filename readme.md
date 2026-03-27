# LaborCalc - Prática de Lógica e Manipulação de DOM

Este projeto é uma suite de ferramentas administrativas voltada para rotinas de Recursos Humanos. Desenvolvido para consolidar conceitos fundamentais de JavaScript puro, o projeto simula cálculos reais de departamento pessoal em uma interface moderna e responsiva.

## 🚀 Visão Geral

A aplicação centraliza três módulos críticos de gestão financeira em um portal administrativo:
1. **Cálculo de Horas Extras:** Processamento de valores baseados em jornadas mensais e adicionais variáveis.
2. **Simulador de Reajuste Salarial:** Aplicação de lógica condicional para cálculos progressivos de aumento.
3. **Gestão de Custos de Transporte:** Projeção de gastos com fretamento baseada em faixas de adesão.

## 🛠️ Tecnologias e Ferramentas
- **Lógica:** JavaScript (ES6+)
- **Interface:** HTML5 & Tailwind CSS (via CDN)
- **Tipografia:** Google Fonts
- **Manipulação:** DOM API

## 📋 Funcionalidades Detalhadas

### 1. Módulo de Horas Extras
Calcula o impacto financeiro de horas adicionais com base em uma carga horária padrão de 200h/mês.
- **Regra de Negócio:** Distinção automática entre horas em dias úteis (valor nominal) e finais de semana (acréscimo de 50%).

### 2. Módulo de Aumento Salarial
Simulador de progressão salarial que aplica diferentes percentuais de reajuste baseados na faixa atual do colaborador:
- Até R$ 1.200,00: **16%**
- Até R$ 2.100,00: **13%**
- Até R$ 3.000,00: **10%**
- Acima de R$ 3.000,00: **5%**

### 3. Gestão de Transporte Fretado
Calculadora logística para dimensionamento de custos de transporte corporativo. O valor unitário é reduzido conforme o volume de usuários (economia de escala).

## 🧠 Competências Desenvolvidas
O desenvolvimento deste projeto permitiu a aplicação prática de:
- **Lógica de Programação:** Estruturas condicionais complexas e operações aritméticas.
- **Interatividade:** Captura e tratamento de eventos de formulário em tempo real.
- **UX/UI:** Feedback dinâmico ao usuário e formatação de dados (Moeda, Datas).
- **Clean Code:** Organização de funções e separação de responsabilidades.

## 📂 Estrutura de Arquivos
```text
fixacao_JS/
├── horaExtra/                # Módulo de Horas Extras
├── aumentoSalario/           # Módulo de Reajuste
├── transporteColaboradores/  # Módulo de Logística
└── index.html                # Dashboard Principal
```

## ⚙️ Como Utilizar
Por ser uma aplicação estática, não há necessidade de instalação de dependências:
 -Clone o repositório.
 -Execute o arquivo index.html em qualquer navegador moderno.
 
#### Desenvolvido por Lorena
