<div align="center">
  <img width="600" src='./imgs/js_logo_op_new.png'>
</div>

# Resumo da palavra reservada `new` com (Ylvis)

\- _What does the `new` say?_
\- _chacha-chacha-chacha-chow!_

> (from Lyrics by V.Ylvisåker/B.Ylvisåker/C.Løchstøer)

## _I want to Know_

O operador `new` permite que desenvolvedores escrevam funções criadoras de objectos de forma mais simples.

Por exemplo uma função geradora (construtora) de objectos como a de baixo:

```js
const comportamentos = {
  incrementaIdade: function() {
    this.idade++;
  }
  minhaIdade: function() {
    return 'A idade do' + this.nome + ' é ' + this.idade
  }
}

function geradorDeUsuario (nome, idade) {
  const novoUsuario = Object.create(comportamentos);
  novoUsuario.nome = nome;
  novoUsuario.idade = idade;

  return novoUsuario;
}
```

### pode facilmente ser escrita como:

```js
function GeradorDeUsuario(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

GeradorDeUsuario.prototype.incrementaIdade = function () {
  this.idade++;
};
GeradorDeUsuario.prototype.minhaIdade = function () {
  return "A idade do " + this.nome + " é " + this.idade;
};

const user = new GeradorDeUsuario("André", 38);

console.log(user.minhaIdade()); // 'A idade do André é 38'
```

### O que o `new` faz é:

1. atribuí ao `this` no contexto de execução da função construtora o valor de um novo `object`;
2. cira o novo `object` ligado ao `prototype` da função construtora (`Object.create(GeradorDeUsuario.prototype)` natureza do modelo de protótipos)
3. retorna o valor do `this`, isto é, do novo objecto criado (caso a função não possua um retorno explícito!).

#### _this is not a mystery anymore_

> Note que uma função construtora feita de modo a ser executada com o `new` não pode ser executada sem a sua precedência! Por convenção e de forma a lembrar os desenvolvedores de usarem o `new` usa-se escrever o nome da função com a primeira letra maiúscula.
