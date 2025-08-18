export class Gasto {
  constructor(categoria, valor) {
    this.categoria = categoria.toLowerCase();
    this.valor = parseFloat(valor);
  }
}
