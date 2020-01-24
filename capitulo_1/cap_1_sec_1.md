# Tipos de dados e variáveis

Os programas funcionam manipulando valores. Os tipos de valores que podem ser representados e manipulados em um linguagem de programação repesenta uma de suas fundamentais características.

Entender os tipos de valor de uma linguaguem de programação é fundamental para o seu entendimento e estudo.

Quando um programa precisa manter um valor ele atribui o valor a uma variável. A forma como uma linguagem trabalha com as variáveis é outra característica fundamental desta.

Existem até agora duas coisas fundamentais em uma linguagem:

O VALOR (o dado) e a VARIÁVEL (nome simbólico que armazena o dado)

e

VALOR !== VARIÁVEL

são coisas diferentes em uma linguagem de progamação

## Tipos de dados em Javascript

1. Primitivos

- number
- string
- boolean

- null `(tipo primitivo especial)`
- undefined `(tipo primitivo especial)`
- symbol
- bigint

2. Não primitivos (tipo object)

- objects
- arrays
- functions (callable object)
- ...

**Atenção**: `typeof` deveria retorna o tipo do datum (do valor), mas:

```js
typeof 38                 'number'
typeof 'carlos'           'string'
typeof true               'boolean'
typeof undefined          'undefined'
typeof null               'object' //aqui o erro é do typeof, pois deveria retornar 'null'
typeof Symbol()           'symbol'
typeof [1, 2, 3]          'object'
typeof {name: 'carlos'}   'object'

typeof function() {}      'function' //mais para frente, falamos sobre
```

- em relação ao erro do typeof(null) [veja este post](https://2ality.com/2013/10/typeof-null.html?ck_subscriber_id=701296460)

Em Javascript o que não é um valor do tipo number, string, boolean, undefined, null ou symbol, então é object (funções, também, são objects, mas são um sub-tipo de object, sendo um object especial).

### Da ECMA-Script (ecma-262)

[4.3.2](<(https://www.ecma-international.org/ecma-262/5.1/#sec-4.3.1)>) primitive value

```
member of one of the types Undefined, Null, Boolean, Number, or String as defined in Clause 8

NOTE A primitive value is a datum that is represented directly at the lowest level of the language implementation.
```

[4.3.24](https://www.ecma-international.org/ecma-262/5.1/#sec-4.3.24) function

```
member of the Object type that is an instance of the standard built-in Function constructor and that may be invoked as a subroutine

NOTE In addition to its named properties, a function contains executable code and state that determine how it behaves when invoked. A function’s code may or may not be written in ECMAScript.
```

## Variáveis

Variáveis não tem tipo, apenas os valores possuem um tipo. As variáveis podem guardar diferentes tipos em tempo de execução.

```js
var name = "carlos";
typeof name; // 'string'

name = 38;
typeof name; // 'number'
```

O typeof não avalia a variável mas sim o valor guardado pela variável, então `typeof name` na verdade é

```js
var name = 'carlos'
typeof name -> typeof 'carlos'     // 'string'

name = 38
typeof name -> typeof 38           // 'number'
```

### Todas as variáveis declaradas e não inicializadas, apesar de retornar `undefined`, elas são, na verdade, não inicializadas (not defined). Apesar da confusão que pode gerar o `undefined` que retorna em um variável não inicializada e apesar da nomenclatura `undefined`, temos que ter em mente que o valor `undefined` é diferente de não inicializada, é diferente do `not defined`

```js
var name;
typeof name; // 'undefined'
```

## Tipo primitivo NUMBER

os valores do tipo number são imutáveis. E todos os valores do tipo number são números representados como valores em ponto flutuante. Isto é, não há distinção entre números inteiros e números com casas decimais.

O padrão usado para os valores de ponto flutuante é o IEEE 754 (o mesmo usado pelo tipo double em Java!), portanto um formato de 64 bits, podendo representar número tão grandes quanto +-1.7976931348623157x10^308 (Number.MAX_VALUE) e tão pequenos quanto +-5x10^-324 (Number.MIN_VALUE).

`ATENÇÃO: Algumas operçãoes com a indexação de arrays e operações bit a bit são efetuadas com inteiros de 32 bits`

### Cuidado na com este tipo de padrão de ponto flutuante:

por exemplo:

```js
const x = 0.3;
const y = 0.2;

console.log(x - y === 0.1);
// false

const t = 0.2;
const r = 0.1;

console.log(t - r === 0.1);
// true
```

porque existe um erro neste cálculo pois:

```js
x - y = 0.09999999999999998;
```

A representação binária descreve frações como 1/2, 1/8... 1/32 ... com exatidão, enquanto frações como 1/10, 1/100, apesar de apresentar um valor bastante próximo não possuem a mesma exatidão que as anteriores.

## Tipo primitivo STRING

## Tipo primitivo BOOLEAN

## Sobre os tipos primitivos e boxing/unboxing
