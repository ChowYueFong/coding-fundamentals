function perimeter(shape, number) {
  return shape === "s" ? 4 * number : 6.28 * number;
}
console.log(perimeter("s", 7));
console.log(perimeter("c", 4));
console.log(perimeter("c", 9));
