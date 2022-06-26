# Tipos de dados e variáveis

Os programas funcionam manipulando valores. Os tipos de valores que podem ser representados e manipulados em um linguagem de programação repesenta uma de suas características fundamentais.

Entender os tipos de valor de uma linguaguem de programação é fundamental para o seu entendimento e estudo.

Quando um programa precisa manter um valor ele atribui o valor a uma variável. A forma como uma linguagem trabalha com as variáveis é outra característica fundamental desta.

Existem até agora duas coisas fundamentais em uma linguagem:

O VALOR (o dado) e a VARIÁVEL (nome simbólico que armazena o dado)

e

VALOR !== VARIÁVEL

são coisas diferentes em uma linguagem de progamação

## A - Tipos de dados em Javascript

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

Em Javascript o que não é um valor do tipo number, string, boolean, bigint, undefined, null ou symbol, então é object (funções, também, são objects, mas são um sub-tipo de object, sendo um object especial).

### Da ECMA-Script (ecma-262)

[4.4.5](<(https://262.ecma-international.org/#sec-primitive-value)>) primitive value

```
member of one of the types Undefined, Null, Boolean, Number, BigInt, Symbol, or String as defined in clause 6

NOTE A primitive value is a datum that is represented directly at the lowest level of the language implementation.
```

[4.4.34](https://262.ecma-international.org/#sec-terms-and-definitions-function) function

```
member of the Object type that may be invoked as a subroutine

NOTE In addition to its properties, a function contains executable code and state that determine how it behaves when invoked. A function's code may or may not be written in ECMAScript.
```

## B - Variáveis

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

### Todas as variáveis declaradas e não inicializadas, retornam `undefined`, elas são, na verdade, inicializadas com o valor `undefined` . Cuidado para não confundir o `undefined` que retorna em uma variável não inicializada com o `not defined` de uma variável não declarada.

```js
var name;
typeof name; // 'undefined'
```

```js
// var name;
console.log(name) // 'not defined'
```

## C 1 -  Tipo primitivo NUMBER

os valores do tipo number são imutáveis. E todos os valores do tipo number são números representados como valores em ponto flutuante. Isto é, não há distinção entre números inteiros e números com casas decimais.

O padrão usado para os valores de ponto flutuante é o IEEE 754-2019 (IEEE Standard for Floating-Point Arithmetic. Institute of Electrical and Electronic Engineers, New York (2019)) (o mesmo usado pelo tipo double em Java!), portanto um formato de 64 bits, podendo representar número tão grandes quanto +-1.7976931348623157x10^308 (Number.MAX_VALUE) e tão pequenos quanto +-5x10^-324 (Number.MIN_VALUE).

`ATENÇÃO: Algumas operçãoes com a indexação de arrays e operações bit a bit são efetuadas com inteiros de 32 bits ou 16 bits` (não são de ponto flututante)

> mais a incluir: o Infinity (ou +Infinity), o -Infinity, 0 (ou +0), -0 e o NaN


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

### separador underscore (_)
```js
var mil_milhoes = 1_000_000_000;
```

## C 2 - Tipo primitivo BigInt
definido em ES2020
É um novo tipo numérico cujos valores são "integers" (inteiros). Possui tamanho de 64 bits.

```js
var interger = 1234n;
```

**Não devemos fazer operações misturando os dois tipos numérico (number e BigInt)**

**Nenhuma das funções do `object Math` aceitam números do tipo BigInt como operando.**

## C 3 - Tipo primitivo STRING
Conjunto ordenado de 16 bits (0 ou 1) sem sinal. Pode ter um tamanho máximo total de 2^53 - 1 elementos.
Cada elemento na `string` é tratado com um valor único da UTF-16.
Estes elementos estão ocupando uma ordem tal no conjunto que podem ser referenciados com base num index, começando no valor 0 e indo até o valor total de elementos - 1.

Uma string vazia tem tamanho 0 e portanto nenhum elemento de 16bits.

> **A maioria das funções que manipulam strings operam em cima da unidade de 16bits e não sobre os caracteres**

Caracteres maiores do que 16bits não serão tratados de acordo, no entanto, a partir do ES6 as strings passaram a ser iteráveis e o uso de loops ou do spread passam a tratar cada elemento NÃO como unidades de 16 bits, mas como caracteres.

## C 4 - Tipo primitivo BOOLEAN
Apenas dois valores são possíveis e são usadas as palavras reservadas `true` e `false`. 

Valores que são avaliados como falso:
- undefined
- null
- 0
- -0
- NaN
- ""

Todo o resto, incluindo arrays, objetos vazios, são avaliados como verdadeiros.

Há pelo menos um método que pode ser usado nos valores booleanos. O método `toString()`

```js
true.toString() // "true"
false.toString() // "false"
```
## C 5 - Tipo primitivo Symbol
Introduzidos com o ES6. Servem como nomes de propriedades de objectos sem serem `strings`.

## C 6 e 7 - Tipo primitivo null e undefined
null e undefined quando avaliadow como booleano equivalem a um `false`.
- `null` - ausência de valor, normalmente para objectos... daí o `typeof null` ser "object".
(null também pode ser ausência de valor para strings, numbers... mas pessoalmente, prefiro deixar o null apenas para a ausência de valores do tipo Objecto)
- `undefined` - ausência de valor, que pode ocorrer pela declaração sem inicialização.

## Sobre os tipos primitivos e auto boxing/unboxing

## **Valores Primitivos são todos imutáveis**