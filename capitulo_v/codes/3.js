const funcoesDeClienteAgrupadas = {
  nomeCompleto: function () {
    return this.nome + " " + this.sobrenome;
  },
  nomeEmCaixaBaixa: function () {
    return this.nome.toLowerCase();
  },
};

function geradorDeCliente(nome, sobrenome) {
  const cliente = Object.create(funcoesDeClienteAgrupadas);
  cliente.nome = nome;
  cliente.sobrenome = sobrenome;

  return cliente;
}

const cliente1 = geradorDeCliente("André", "Prince");
const cliente2 = geradorDeCliente("Sérgio", "Júnior");

console.log(cliente1);
console.log(cliente1.nomeEmCaixaBaixa());
console.log(cliente2);
