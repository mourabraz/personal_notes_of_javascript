const user = {
  name: "Carlos",
  age: 38,

  getMessage: () => {
    console.log(this);
    return `Olá ${this.name} você tem ${this.age} anos`;
  },
};

console.log(user.getMessage());

console.log("Teste de video");
