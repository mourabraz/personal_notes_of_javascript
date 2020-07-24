function soma(a, b) {
  console.log("Soma", this);

  const total = () => {
    console.log("Total", this);
    return a + b;
  };

  return total;
}

console.log(soma(1, 2)());
