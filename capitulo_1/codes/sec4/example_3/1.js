var firstModule = (function () {
  var name = "Carlos";
  function hello() {
    return `Olá ${name}! Tenha um bom dia!`;
  }

  return { hello };
})();
