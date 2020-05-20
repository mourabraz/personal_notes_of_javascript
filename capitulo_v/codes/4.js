function geradorDeCliente(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

const cliente1 = new geradorDeCliente("André", "Prince");

console.log(cliente1.nome);
