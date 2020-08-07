"use strict";

// console.log("this dentro do arquivo que será executado");
// console.log("this === global object", this === global);
// console.log("o valor de this é", this);

// function alo() {
//   console.log(this);
// }

// alo();

const meuArray = [1, 2, 3, 4, 5];

meuArray.forEach((i) => {
  console.log(this);
});

meuArray.map(
  (i) => {
    console.log(this);
  },
  { name: "Carlos" }
);
