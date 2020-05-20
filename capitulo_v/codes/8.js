class GeradorDeCliente {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  static metodoEstaticoDaClasse() {
    return "Eu venho da Classe Gerador de Cliente";
  }

  nomeCompleto() {
    return this.nome + " " + this.sobrenome;
  }

  nomeEmCaixaBaixa() {
    return this.nome.toLowerCase();
  }
}

const cliente1 = new GeradorDeCliente("André", "Prince");

console.log(cliente1.nome);
console.log(cliente1.nomeCompleto());
console.log(GeradorDeCliente.metodoEstaticoDaClasse());
