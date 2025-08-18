export function formatarMoeda(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

export function obterElemento(id) {
  return document.getElementById(id.toLowerCase());
}

export function valorNegativo(valor) {
  return parseFloat(valor) < 0 || isNaN(valor);
}
