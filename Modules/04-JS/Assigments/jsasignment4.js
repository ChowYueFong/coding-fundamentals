function tetraCalc(x) {
  let total = 0;
  total = (x * (x + 1) * (x + 2)) / 6;
  return total;
}
console.log(tetraCalc(2));
console.log(tetraCalc(5));
console.log(tetraCalc(6));
