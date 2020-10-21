(function () {
  var name = "Ricardo";
  var age = 37;

  function getInfo() {
    return `O usuário ${name} tem ${age} anos de vida!`;
  }

  // aqui tenho acesso/visibilidade às variáveis name, age e à função getInfo

  console.log("dentro da função: ", getInfo());
})();

// SEM acesso/visibilidade às variáveis name, age e à função getInfo
console.log("fora da função: ", getInfo());
