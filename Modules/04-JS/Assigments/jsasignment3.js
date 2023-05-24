function factorialCalc(x) {
  let total = 1;
  for (let i = 1; i <= x; i++) {
    total = total * i;
  }
  return total;
}
console.log(factorialCalc(5));
console.log(factorialCalc(4));
console.log(factorialCalc(1));
