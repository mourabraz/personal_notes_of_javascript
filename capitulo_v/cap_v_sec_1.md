# Classes no Javascript

- Javascript não possuiu classes, não é orientado a classes, no entanto, possuiu mecanismos que permitem o uso de algo muito parecido com classes.
- A vantagem do uso de classes, na minha opinião, é que o seu uso facilita muito a implementação orientada a objectos, além do fato de, no meu caso, estar mais habituado a usar uma programação com o uso de classes.
- Javascript, apesar de oferecer este mecanismo que nos permite usar uma sintaxe muito próxima da que usamos em linguagens orientadas a classes, não possui artifícios exaustivos que permitam o uso completo desse paradigma. Por exemplo, em Javascript não existem interfaces.
- Javascript é orientado a protótipos e entender a cadeia de protótipo (_prototype chain_) vai permitir entender exatamente como funciona essa aproximação às classes.

## Simular um problema

- Em nosso programa (fictício) iremos lidar com dados que se agrupam em uma categoria que no caso será o Cliente. Para isso iremos usar uma estrutura de dados como a seguinte:

```js
// os Dados:
let nome = "Nome";
let sobreNome = "e Sobrenome do Cliente";
function nomeCompleto() {
  return nome + " " + sobreNome;
}

//mas esses dados precisam ser agrupados, daí iremos usar o object
let cliente = Object.create(null);
cliente.nome = "Nome";
cliente.sobreNome = "e Sobrenome do Cliente";
cliente.nomeCompleto = function () {
  return nome + " " + sobreNome;
};

//Os dados estruturados em um object
const cliente = {
  nome: "Nome",
  sobreNome: "e Sobrenome do Cliente",

  nomeCompleto: function () {
    return client.nome + " " + client.sobreNome;
  },
};
```

- Cliente é um objecto que possui duas propriedades, `nome` e `sobrenome`, e um comportamento (método), `nomeCompleto` (por enquanto).
- Agora os dados de um Cliente ficam **encapsulados** em um _object_ com o nome `cliente`.

## Caso tenhamos mais de um cliente, ficará mais fácil lidar com os dados de cada um:

```js
const cliente1 = {
  nome: "André",
  sobreNome: "Prince",

  nomeCompleto: function () {
    return cliente1.nome + " " + cliente1.sobreNome;
  },
};

const cliente2 = {
  nome: "Sérgio",
  sobreNome: "Júnior",

  nomeCompleto: function () {
    return cliente2.nome + " " + cliente2.sobreNome;
  },
};
```

Neste momento na memória temos algo como isto:

<div>
  <img width="800" src='./imgs/1.png'>
</div>

- Mas e se forem 100 clientes....

da forma como está sendo feito pode levar a erros, imagine uma estrutura com 10 propriedades e 10 métodos associados em um object. Além de estarmos repetindo a função (método) `nomeCompleto` para cada um dos objectos criados.

Seria melhor criar um modelo que pudesse fornecer esses objectos com as características e os comportamentos de um Cliente.

## 1º Passo da Solução

Podemos gerar os clientes com uma função geradora (assim, pelo menos, simplificamos a atribuição dos comportamentos - sendo bem simplista)

```js
function geradorDeCliente(nome, sobrenome) {
  const cliente = {}; //o mesmo que Object.create({})
  cliente.nome = nome;
  cliente.sobrenome = sobrenome;

  cliente.nomeCompleto = function () {
    return cliente.nome + " " + cliente.sobrenome;
  };

  return cliente;
}

const cliente1 = geradorDeCliente("André", "Prince");
const cliente2 = geradorDeCliente("Sérgio", "Júnior");
```

Na memória nada mudou a não ser o aparecimento da função geradora.

<div align="center">
  <img width="400" src='./imgs/2.png'>
</div>

- pelo menos agora temos uma fábrica que produz clientes, basta passarmos o nome e o sobrenome desejado!

### ainda estamos sofrendo com o fato de estarmos copiando para cada cliente o método `nomeCompleto`!

- Para melhorar isso partimos para o 2º passo.

## 2º Passo da Solução

- Como já foi dito Javascript não tem uma solução como a de outras linguagens de programação de forma a evitar a repetição acima demonstrada. Em Javascript usamos a cadeia de protótipos (_prototype chain_) para agrupar, em um outro objecto, o código que vem se repetindo a cada ojecto produzido pela função geradora. Cada objecto produzido vai poder acessar aquele objecto (o que agrupa o código repetido) e, consequentemente, as propriedades que se repetem em cada objecto cliente.

- Vamos adicionar outro comportamento ao objecto cliente para melhor demonstração.

```js
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
```

- o resultado no console é:

<div align="center">
  <img width="400" src='./imgs/3.png'>
</div>

- o `cliente1` pode acesar o método `nomeEmCaixaBaixa` mesmo que este não esteja contido no objecto cliente1! Isso foi possível porque ao tentar acessar esse método e ele não existindo no objecto `cliente1` o "javascript" irá verificar se esse método existe na cadeia de protótipos desse mesmo objeto.

- detalhes do `Object.create()` em [MDN web docs](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/create)

### na execução do código acima temos algo como:

<div align="center">
  <img width="800" src='./imgs/4.png'>
</div>
