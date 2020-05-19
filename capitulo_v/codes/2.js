"use strict";

function geradorDeCliente(nome, sobrenome) {
  const cliente = Object.create({});
  cliente.nome = nome;
  cliente.sobrenome = sobrenome;

  cliente.nomeCompleto = function () {
    return cliente.nome + cliente.sobrenome;
  };

  return cliente;
}

const cliente1 = geradorDeCliente("André", "Prince");
const cliente2 = geradorDeCliente("Sérgio", "Júnior");

console.log(cliente1);
console.log(cliente2);
