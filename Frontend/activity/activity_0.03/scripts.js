class Parquimetro {
  constructor() {
    this.tabelaValores = [
      { valor: 3.00, tempo: 120 },
      { valor: 1.75, tempo: 60 },
      { valor: 1.00, tempo: 30 }
    ];
  }

  calcularTempo() {
    const input = document.getElementById('valor');
    const resultado = document.getElementById('resultado');
    const valorInserido = parseFloat(input.value);

    if (isNaN(valorInserido) || valorInserido <= 0) {
      resultado.innerHTML = `<p class="erro">Por favor, insira um valor válido.</p>`;
      return;
    }

    const opcao = this.tabelaValores.find(opcao => valorInserido >= opcao.valor);

    if (!opcao) {
      resultado.innerHTML = `<p class="erro">Valor insuficiente. Mínimo R$1,00.</p>`;
      return;
    }

    const troco = (valorInserido - opcao.valor).toFixed(2);

    resultado.innerHTML = `
      <p>Tempo de estacionamento: <strong>${opcao.tempo} minutos</strong></p>
      <p>Troco: <strong>R$ ${troco}</strong></p>
    `;
  }
}

const parquimetro = new Parquimetro();
