function GeradorDeCliente(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

GeradorDeCliente.prototype.nomeCompleto = function () {
  const self = this;
  function retorneNomeCompleto() {
    return self.nome + " " + self.sobrenome;
  }

  return retorneNomeCompleto();
};

GeradorDeCliente.prototype.nomeEmCaixaBaixa = function () {
  return this.nome.toLowerCase();
};

const cliente1 = new GeradorDeCliente("André", "Prince");

console.log(cliente1.nome);
console.log(cliente1.nomeCompleto());
console.log(cliente1.__proto__);
