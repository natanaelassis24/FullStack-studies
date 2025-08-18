const matrizGastos = [
  ["alimentacao", 0],
  ["transporte", 0],
  ["lazer", 0],
  ["outros", 0],
  ["total", 0],
];

// Funções utilitárias
const obterElemento = (id) => document.getElementById(id);
const valorNegativo = (valor) => valor < 0;
const somaValor = (total, valor) => Number(total) + Number(valor);
const limparCampos = () => obterElemento("balor").value = "";

// Obter valores do formulário
const obterValorInformado = () => obterElemento("balor").value;
const obterCategoriaInformada = () => obterElemento("categoria").value;

// Obter categoria da matriz
const obterCategoria = (matriz, nomeCategoria) =>
  matriz.find((item) => item[0] === nomeCategoria);

// Atualizar valores da matriz
const atualizarValorCategoria = (categoria, valor) =>
  categoria[1] = somaValor(categoria[1], valor);

// Atualizar interface
const atualizarInterface = () => {
  matrizGastos.forEach(([nome, valor]) => {
    const elemento = obterElemento(nome);
    if (elemento) {
      elemento.textContent = `${nome}: R$ ${valor.toFixed(2)}`;
    }
  });
};

// Lógica principal
function adicionarGasto() {
  const valorInformado = obterValorInformado();
  const categoriaInformada = obterCategoriaInformada();

  if (valorNegativo(valorInformado)) {
    alert("Valor inválido. O valor não pode ser negativo.");
    return;
  }

  const categoria = obterCategoria(matrizGastos, categoriaInformada);
  const total = obterCategoria(matrizGastos, "total");

  atualizarValorCategoria(categoria, valorInformado);
  atualizarValorCategoria(total, valorInformado);

  atualizarInterface();
  limparCampos();
}
