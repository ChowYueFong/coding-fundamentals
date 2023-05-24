function capToFront1(string) {
  let arrayCap = [];
  let arrayNoCap = [];
  let array = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      arrayCap.push(string[i]);
    } else {
      arrayNoCap.push(string[i]);
    }
  }
  array = arrayCap.join("") + arrayNoCap.join("");
  return array;
}
console.log(capToFront1("hApPy"));
console.log(capToFront1("moveMENT"));
console.log(capToFront1("shOrtCAKE"));

// Alternate Solution
function capToFront2(str) {
  // 1. Split the string into an array of chracters
  // 2. Categorise uppercase and lowercase letters
  // 3. Merge both arrays into 1 by putting the uppercase in the front
  // 4. Join them back into a string

  const arrStr = str.split("");
  const lowers = arrStr.filter((char) => char.toUpperCase() != char);
  const uppers = arrStr.filter((char) => char.toUpperCase() === char);
  const mergeArr = [...uppers, ...lowers];
  const joinedStr = mergeArr.join("");
  return joinedStr;
}

console.log(capToFront2("hApPy") === "APhpy");
console.log(capToFront2("moveMENT") === "MENTmove");
console.log(capToFront2("shOrtCAKE") === "OCAKEshrt");
