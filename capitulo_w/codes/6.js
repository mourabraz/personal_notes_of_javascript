function memoizedCounter() {
  let counter = 0;

  function increment() {
    return ++counter;
  }

  return increment;
}

const counterFunc = memoizedCounter();

console.log(counterFunc());
console.log(counterFunc());
