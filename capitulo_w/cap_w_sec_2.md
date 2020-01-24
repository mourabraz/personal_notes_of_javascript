# Fundações do Javascript

## A palavra `this`

- a palavra reservada `this` pode possuir diferentes valores, podendo ser: `undefined`, o objecto global, o object window, o 'module.exports', ou um outro objecto criado.

- o `this`, também pode ter valores diferentes entre os modos _strict_ e não _strict_

https://www.ecma-international.org/ecma-262/10.0/index.html#sec-strict-mode-of-ecmascript

- If this is evaluated within strict mode code, then the this value is not coerced to an object. A this value of undefined or null is not converted to the global object and primitive values are not converted to wrapper objects. The this value passed via a function call (including calls made using Function.prototype.apply and Function.prototype.call) do not coerce the passed this value to an object (9.2.1.2, 19.2.3.1, 19.2.3.3).

# `this` referência o valor do `global object`

1 - quando usado dentro do _global enviroment_, `this` apontará para o `objecto global`:

<div>
  <img width="1000" src='./imgs/section_2/this_no_node.png'>
</div>

- repare-se que o console.log() foi chamado dentro do node

# `this` referência o valor do `module.exports`

- Dentro de um arquivo.js que será executado pelo node o `this` referência o module.exports.

```js
console.log("this dentro do arquivo que será executado");
console.log("this === global object", this === global);
console.log("o valor de this é", this);
```

<div>
  <img width="1000" src='./imgs/section_2/this_no_arquivo.png'>
</div>
