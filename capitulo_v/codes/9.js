class GeradorDeCliente {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    GeradorDeCliente.totalDeClientesCriados++;
  }

  static getTotalDeClientesCriados() {
    /*
    ou no lugar de usar o this: 
    GeradorDeCliente.totalDeClientesCriados 
    (mais explícito e evita confusões, voy seguir com o this
    para reforçar a idéia de que o this em métodos estáticos
    possuem um valor diferente do this dos outros métodos)     
    */

    return this.totalDeClientesCriados;
  }

  nomeCompleto() {
    return this.nome + " " + this.sobrenome;
  }

  nomeEmCaixaBaixa() {
    return this.nome.toLowerCase();
  }
}

GeradorDeCliente.totalDeClientesCriados = 0;

console.log(GeradorDeCliente.totalDeClientesCriados); // 0

const cliente1 = new GeradorDeCliente("André", "Prince");

console.log(GeradorDeCliente.totalDeClientesCriados); // 1
