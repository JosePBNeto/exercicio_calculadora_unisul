let historicoCalculo = [];

function adicionarAoVisor(valor) {
    document.getElementById('resultado').value += valor;
}

function limparVisor() {
    document.getElementById('resultado').value = '';
}

function elevarAoQuadrado() {
    let resultado = document.getElementById('resultado');
    resultado.value = Math.pow(parseFloat(resultado.value), 2);
}

function calcularRaiz() {
    let resultado = document.getElementById('resultado');
    resultado.value = Math.sqrt(parseFloat(resultado.value));
}

function calcular() {
    let resultado = document.getElementById('resultado');
    try {
        let calculo = eval(resultado.value);
        resultado.value = calculo;
        adicionarAoHistorico(calculo);
    } catch (erro) {
        resultado.value = 'Erro';
    }
}

function adicionarAoHistorico(calculo) {
    historicoCalculo.unshift(calculo);
    if (historicoCalculo.length > 3) {
        historicoCalculo.pop();
    }
    exibirHistorico();
}

function exibirHistorico() {
    let listaHistorico = document.getElementById('historico-calc');
    listaHistorico.innerHTML = '';
    historicoCalculo.forEach(calculo => {
        let li = document.createElement('li');
        li.textContent = calculo;
        listaHistorico.appendChild(li);
    });
}

let modoEscuro = false;

function alternarTema() {
    modoEscuro = !modoEscuro;
    const corpo = document.body;
    const calculadora = document.querySelector('.calculadora');
    const botoes = document.querySelectorAll('.botoes button');

    if (modoEscuro) {
        corpo.classList.add('modo-escuro');
        calculadora.classList.add('modo-escuro');
        botoes.forEach(botao => botao.classList.add('modo-escuro'));
    } else {
        corpo.classList.remove('modo-escuro');
        calculadora.classList.remove('modo-escuro');
        botoes.forEach(botao => botao.classList.remove('modo-escuro'));
    }
}