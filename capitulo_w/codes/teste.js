"use strict";

function getMessage() {
  console.log(`Olá ${this.name} você tem ${this.age} anos`);
}

const user1 = {
  name: "Carlos",
  age: 38,
  getMessage: getMessage,
};

var func = user1.getMessage;

setTimeout(getMessage.bind(user1), 0);
