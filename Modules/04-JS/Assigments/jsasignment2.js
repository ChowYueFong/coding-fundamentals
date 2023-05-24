// as of 21st of May 2023
function calculateAge(dd, mm, yyyy) {
  let age = 0;
  age = 2023 - yyyy;
  if (mm > 5) {
    age--;
    return age;
  } else if (dd > 21) {
    age--;
    return age;
  }
  return age;
}
console.log(calculateAge(21, 5, 2005));
console.log(calculateAge(22, 5, 2005));
console.log(calculateAge(21, 6, 2005));
