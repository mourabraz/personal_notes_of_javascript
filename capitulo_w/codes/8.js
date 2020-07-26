let name = "Carlos";

function sayHello() {
  function hello() {
    return "Hello " + name;
  }

  return hello;
}

const say = sayHello();

console.log(say()); // Hello Carlos

name = "João";

console.log(say()); // Hello João
