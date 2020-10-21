var getInfoModule = (function () {
  var name = "Ricardo";
  var age = 37;

  function getInfo() {
    return `O usuário ${name} tem ${age} anos de vida!`;
  }

  // aqui tenho acesso/visibilidade às variáveis name, age e à função getInfo

  return { getInfo };
})();

// SEM acesso/visibilidade às variáveis name, age
// mas a variável getInfo (fora da IIFE) recebe a função getInfo (retornada da IIFE)
//console.log("fora da função: ", getInfo());
