function multiply(x, y) {
  return x * y;
}

function square(n) {
  const result = multiply(n, n);

  return result;
}

console.log('start');

const number = 10;

const numberSquare = square(number);

console.log(numberSquare);

console.log('end');