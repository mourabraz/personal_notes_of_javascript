var secondModule = (function () {
  var name = "Telma";

  function countLetters() {
    return name.length; //not the best solution, ok!
  }

  return { countLetters };
})();
