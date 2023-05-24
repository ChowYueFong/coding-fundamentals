function possibleBonus(a, b) {
  if (1 <= b - a && b - a <= 6) {
    return true;
  } else {
    return false;
  }
}
// function possibleBonus(a, b) {
//   return 1 <= b - a && b - a <= 6 ? true : false;
// }
console.log(possibleBonus(3, 7));
console.log(possibleBonus(1, 9));
console.log(possibleBonus(5, 3));
