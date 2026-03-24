// --------------------
// Variáveis para armazenar os valores do formulário
// --------------------
const quantidadeFuncionarios = () => parseFloat(document.getElementById('quantidadeFuncionarios').value || 0);

const quantidadeDiasUteis = () => parseInt(document.getElementById('quantidadeDiasUteis').value || 0);

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

    // Formata o valor para o padrão brasileiro antes de mostrar na tela.
    const dataHoraFormatada = agora.toLocaleString('pt-BR', {
        dateStyle: 'full',
        timeStyle: 'medium'
    });

    // Escreve a data e a hora no elemento criado no HTML.
    elementoDataHora.innerText = `Data e hora atuais: ${dataHoraFormatada}`;
}

// Atualiza o conteúdo assim que a página carrega e depois a cada segundo.
atualizarDataHoraAtual();
setInterval(atualizarDataHoraAtual, 1000);

// --------------------
// Função para calcular o aumento do salário do funcionário
// --------------------
function calcularCustoMensal() {
    const funcionarios = quantidadeFuncionarios();
    const diasUteis = quantidadeDiasUteis();
    let taxaPorFuncionario = 0;

    // Validação básica
    if (funcionarios <= 0 || diasUteis <= 0) {
        alert("Por favor, preencha a quantidade de funcionários e de dias úteis.");
        return;
    }

    // Lógica de taxas baseada na quantidade de funcionários
    if (funcionarios <= 49) {
        taxaPorFuncionario = 4.50;
    }
    else if (funcionarios <= 99) {
        taxaPorFuncionario = 4.10;
    }
    else if (funcionarios <= 149) {
        taxaPorFuncionario = 3.80;
    }
    else {
        taxaPorFuncionario = 3.60;
    }

    // CÁLCULO FINAL: (Qtd Funcionários * Valor da Faixa) * Dias Úteis
    const custoTotal = (funcionarios * taxaPorFuncionario) * diasUteis;

    // Formata para moeda brasileira
    const valorFormatado = custoTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    // Exibe o resultado no card azul
    exibirResultado(valorFormatado);

    // ADICIONA AO HISTÓRICO (O que faltava!)
    adicionarAoHistorico(funcionarios, diasUteis, valorFormatado);
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
// Função para salvar os resultados no histórico
// ------------------
function adicionarAoHistorico(qtd, dias, resultado) {
    const elementoHistorico = document.getElementById('historico');

    // Limpa a mensagem inicial se for o primeiro item
    if (elementoHistorico.innerText.trim() === "Nenhum cálculo realizado ainda.") {
        elementoHistorico.innerHTML = "";
    }

    // Cria a linha de texto para o histórico
    const novaLinha = `<div><strong>${qtd} func. / ${dias} dias</strong> → ${resultado}</div>`;

    // Adiciona ao topo (ou final) do histórico
    elementoHistorico.innerHTML = novaLinha + elementoHistorico.innerHTML;

    // Rola para o topo para ver o cálculo mais recente
    elementoHistorico.scrollTop = 0;
}

// ------------------
// Função para limpar histórico
// ------------------
function limparHistorico() {
    document.getElementById('historico').innerHTML = "Nenhum cálculo realizado.";
    document.getElementById('quantidadeFuncionarios').value = "";
    document.getElementById('quantidadeDiasUteis').value = "";
    document.getElementById('areaResultado').classList.add('hidden');
}
