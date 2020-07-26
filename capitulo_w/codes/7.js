function multiplyBy(value) {
  function multiply(anotherValue) {
    return value * anotherValue;
  }

  return multiply;
}

const multiply2By = multiplyBy(2);
const multiply10By = multiplyBy(10);

console.log(multiply2By(3)); // 6
console.log(multiply10By(3)); // 30

console.log(multiply2By(4)); // 8
console.log(multiply10By(4)); // 40
