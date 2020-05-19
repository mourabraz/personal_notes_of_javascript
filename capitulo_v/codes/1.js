"use strict";

const cliente1 = {
  nome: "André",
  sobreNome: "Prince",

  nomeCompleto: function () {
    return cliente1.nome + cliente1.sobreNome;
  },
};

const cliente2 = {
  nome: "Sérgio",
  sobreNome: "Júnior",

  nomeCompleto: function () {
    return cliente2.nome + cliente2.sobreNome;
  },
};

console.log(cliente1);
console.log(cliente2);
