// --------------------
// Variáveis para armazenar os valores do formulário
// --------------------
const getSalarioAtual = () => parseFloat(document.getElementById('salarioFuncionario').value || 0);

// --------------------
// Funções para exibir a data e hora atuais do sistema do usuário
// --------------------
function atualizarDataHoraAtual() {
    const elementoDataHora = document.getElementById('dataHoraAtual');

    if (!elementoDataHora) {
        return;
    }

    // Cria um objeto Date com a data e a hora atuais do computador do usuário.
    const agora = new Date();

    // Formata a data e a hora no padrão brasileiro para exibir na página.
    const dataHoraFormatada = agora.toLocaleString('pt-BR', {
        dateStyle: 'full',
        timeStyle: 'medium'
    });

    // Mostra o texto pronto no elemento criado no HTML.
    elementoDataHora.innerText = `Data e hora atuais: ${dataHoraFormatada}`;
}

// Atualiza a data/hora ao carregar a página e repete a cada segundo.
atualizarDataHoraAtual();
setInterval(atualizarDataHoraAtual, 1000);

// --------------------
// Função para calcular aumento
// --------------------
function calcularAumento() {
    const salario = getSalarioAtual();
    let percentual = 0;

    if (salario <= 0) {
        alert("Por favor, informe um salário válido.");
        return;
    }

    // Regras do Exercício
    if (salario <= 1200) {
        multiplicador = 1.16;
    } else if (salario <= 2100) {
        multiplicador = 1.13;
    } else if (salario <= 3000) {
        multiplicador = 1.10;
    } else {
        multiplicador = 1.05;
    }

    const novoSalario = salario * multiplicador;

    // Formatação
    const salarioFormatado = novoSalario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const antigoFormatado = salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    const porcentagemExibicao = ((multiplicador - 1) * 100).toFixed(0);

    // Exibir na tela
    exibirResultado(salarioFormatado);

    // Adicionar ao histórico (mostrando o ganho)
    adicionarAoHistorico(antigoFormatado, porcentagemExibicao, salarioFormatado);
}

// ------------------
// Função para exibir os resultados na página
// ------------------
function exibirResultado(valorTexto) {
    const areaResultado = document.getElementById('areaResultado');
    const pValorFinal = document.getElementById('valorFinal');

    pValorFinal.innerText = valorTexto;
    areaResultado.classList.remove('hidden');
}

// ------------------
// Função para adicionar resultados ao histórico
// ------------------
function adicionarAoHistorico(antigo, perc, novo) {
    const elementoHistorico = document.getElementById('historico');

    if (elementoHistorico.innerText.trim() === "Nenhum cálculo realizado.") {
        elementoHistorico.innerHTML = "";
    }

    // Cria uma linha detalhada no histórico
    const item = `<div><span class="text-xs text-slate-400">${antigo} +${perc}%</span> → <strong>${novo}</strong></div>`;

    elementoHistorico.innerHTML = item + elementoHistorico.innerHTML;
    elementoHistorico.scrollTop = 0;
}
