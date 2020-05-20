class GeradorDeCliente {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
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
console.log(cliente1.__proto__);
