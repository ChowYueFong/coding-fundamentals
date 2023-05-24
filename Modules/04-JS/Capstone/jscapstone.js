function missingLetter(parameter) {
  let string = parameter.toLowerCase();
  let firstChar = string.charCodeAt(0);
  let missingCharCode = 0;
  let missingCharacters = [];
  for (let i = 1; i < string.length; i++) {
    if (string.charCodeAt(i) === firstChar + i) {
      return;
    } else {
      let missingCharCodeDiff =
        string.charCodeAt(i) - string.charCodeAt(i - 1) - 1;
      if (missingCharCodeDiff === 1) {
        missingCharCode = string.charCodeAt(i) - 1;
        missingCharacters.push(String.fromCharCode(missingCharCode));
      } else {
        for (let n = missingCharCodeDiff; n > 0; n--) {
          missingCharCode = string.charCodeAt(i) - n;
          missingCharacters.push(String.fromCharCode(missingCharCode));
        }
      }
    }
  }
  return missingCharacters.join("");
}
console.log(missingLetter("ace"));
console.log(missingLetter("ad"));
