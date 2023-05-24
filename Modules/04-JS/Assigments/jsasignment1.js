function sum(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total = total + array[i];
  }
  return total;
}
const array1 = [1, 2, 3, 4];
const array2 = [-3, 5, 19, -6];
console.log(sum(array1));
console.log(sum(array2));
