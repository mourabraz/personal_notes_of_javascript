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
