import { Gasto } from './classes.js';
import { formatarMoeda, obterElemento, valorNegativo } from './utils.js';

const formulario = document.querySelector("form");

let totalGasto = 0;
const categorias = {
  alimentação: 0,
  transporte: 0,
  lazer: 0,
  outros: 0,
};

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const valor = document.getElementById("valor").value;
  const categoria = document.getElementById("categoria").value;

  if (valorNegativo(valor)) {
    alert("Valor inválido! O valor não pode ser negativo ou vazio.");
    return;
  }

  const gasto = new Gasto(categoria, valor);
  categorias[gasto.categoria] += gasto.valor;
  totalGasto += gasto.valor;

  atualizarInterface();
  formulario.reset();
});

function atualizarInterface() {
  for (const categoria in categorias) {
    const elemento = obterElemento(categoria);
    elemento.textContent = `${capitalizar(categoria)}: ${formatarMoeda(categorias[categoria])}`;
  }

  const total = obterElemento("total");
  total.textContent = `Total: ${formatarMoeda(totalGasto)}`;
}

function capitalizar(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}
