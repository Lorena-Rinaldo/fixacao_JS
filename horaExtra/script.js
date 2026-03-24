// --------------------
// Variáveis para armazenar os valores do formulário
// --------------------
const salarioBruto = () => parseFloat(document.getElementById('salarioBruto').value || 0);
const horasExtrasDiasUteis = () => parseFloat(document.getElementById('horasExtrasDiasUteis').value || 0);
const horasExtrasFinaisSemana = () => parseFloat(document.getElementById('horasExtrasFinaisSemana').value || 0);

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

    // Converte o valor para um texto formatado no padrão brasileiro.
    const dataHoraFormatada = agora.toLocaleString('pt-BR', {
        dateStyle: 'full',
        timeStyle: 'medium'
    });

    // Exibe o resultado no elemento reservado no HTML.
    elementoDataHora.innerText = `Data e hora atuais: ${dataHoraFormatada}`;
}

// Executa a função quando a página abre e atualiza o horário a cada segundo.
atualizarDataHoraAtual();
setInterval(atualizarDataHoraAtual, 1000);

// --------------------
// Variáveis de configuração
// --------------------
const cargaHorariaMensal = 200;
const adicionalFinaisDeSemana = 1.5;

// --------------------
// Função para calcular o valor da hora trabalhada
// --------------------
function calcularValorHoraTrabalhada() {
    return salarioBruto() / cargaHorariaMensal;
}

// --------------------
// Função para calcular o valor total das horas extras em dias úteis
// --------------------
function calcularHorasDiasUteis() {
    return calcularValorHoraTrabalhada() * horasExtrasDiasUteis();
}

// ------------------
// Função para calcular o valor total das horas extras em finais de semana
// ------------------
function calcularHorasExtrasFinaisDeSemana() {
    return horasExtrasFinaisSemana() * calcularValorHoraTrabalhada() * adicionalFinaisDeSemana;
}

// ------------------
// Função para calcular o valor total a ser pago pelas horas extras
// ------------------
function calcularTotal() {
    const resultado = calcularHorasExtrasFinaisDeSemana() + calcularHorasDiasUteis();

    // Formatação para passar para o histórico
    const resultadoFormatado = resultado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    exibirResultado(resultado);

    adicionarAoHistorico(horasExtrasDiasUteis(), horasExtrasFinaisSemana(), resultadoFormatado);
}

// ------------------
// Função para exibir os resultados na página
// ------------------
function exibirResultado(valor) {
    const areaResultado = document.getElementById('areaResultado');
    const pValorFinal = document.getElementById('valorFinal');
    pValorFinal.innerText = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    areaResultado.classList.remove('hidden');
}

// ------------------
// Função para salvar os resultados (O restante está correto!)
// ------------------
function adicionarAoHistorico(uteis, fim, total) {
    const elementoHistorico = document.getElementById('historico');
    if (elementoHistorico.innerText.trim() === "Nenhum cálculo realizado.") {
        elementoHistorico.innerHTML = "";
    }
    const item = `<div><strong>${uteis}h úteis | ${fim}h fim de sem.</strong> → ${total}</div>`;
    elementoHistorico.innerHTML = item + elementoHistorico.innerHTML;
    elementoHistorico.scrollTop = 0;
}
