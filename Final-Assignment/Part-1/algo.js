// 1. Reverse A String Using Loops
function reverse(string) {
  let reversed = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }

  return reversed;
}

console.log(reverse("abcde") == "edcba");
console.log(reverse("hello") == "olleh");
console.log(
  reverse("Greetings from The Hacker Collective") ==
    "evitcelloC rekcaH ehT morf sgniteerG"
);

// 2. Same Back And Forth - Is a string the same backwards and forwards? Return true if it is, false if it is not.
function sameBackAndForth(string) {
  let reversed = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }

  return reversed === string;
}

console.log(sameBackAndForth("abba") === true);
console.log(sameBackAndForth("abcdefg") === false);

// 3. Given an integer, return an integer that is the reverse ordering of numbers.
function reverseInt(num) {
  let string = num.toString();

  if (num > 0) {
    let reversed = "";

    for (let i = string.length - 1; i >= 0; i--) {
      reversed += string[i];
    }

    return Number(reversed);
  }

  if (num < 0) {
    let reversed = "";

    for (let i = string.length - 1; i >= 1; i--) {
      reversed += string[i];
    }

    return Number(`-${reversed}`);
  }
}

console.log(reverseInt(15) === 51);
console.log(reverseInt(981) === 189);
console.log(reverseInt(500) === 5);
console.log(reverseInt(-15) === -51);
console.log(reverseInt(-90) === -9);

// 4. SumArr - Find the sum of all items in an array, using loops.
function sumArr(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
}

console.log(sumArr([1, 2, 3, 4, 5]) == 15);
console.log(sumArr([1000, 2000, 44, 55, 22]) == 3121);
console.log(sumArr([123, 456, 789]) == 1368);

// 5. Angry Grandma - You will write a function that takes in a String. The function should return a new sentence where every word is yelled. A yelled word is when each word is all uppercase followed by 2 exclamation marks (!!)
function deafGrandma(string) {
  let uppercase = string.toUpperCase();

  let array = uppercase.split(" ");

  let angry = "";

  for (let i = 0; i < array.length; i++) {
    angry += `${array[i]}!! `;
  }

  let finalArray = angry.split("");

  let final = finalArray.slice(0, finalArray.length - 1);

  let answer = "";

  for (let i = 0; i < final.length; i++) {
    answer += final[i];
  }

  return answer;
}

console.log(
  deafGrandma("I have a bad feeling about this") ==
    "I!! HAVE!! A!! BAD!! FEELING!! ABOUT!! THIS!!"
);

// 6. What Is Missing - Find the missing letter in the passed letter range and return it. If all letters are present in the range, return undefined.
function whatIsMissing(parameter) {
  let string = parameter.toLowerCase();
  let firstChar = string.charCodeAt(0);
  let missingCharCode = 0;
  let missingCharacters = [];

  for (let i = 1; i < string.length; i++) {
    if (string.charCodeAt(i) !== firstChar + 1) {
      let missingCharCodeDiff =
        string.charCodeAt(i) - string.charCodeAt(i - 1) - 1;
      for (let n = missingCharCodeDiff; n > 0; n--) {
        missingCharCode = string.charCodeAt(i) - n;
        missingCharacters.push(String.fromCharCode(missingCharCode));
      }
    }
  }

  if (missingCharacters.length === 0) {
    return undefined;
  }

  return missingCharacters.join("");
}

console.log(whatIsMissing("abcdefghijklmnopqrstuvwxyz") == undefined);
console.log(whatIsMissing("bcdf") == "e");
console.log(whatIsMissing("abcdefghjklmno") == "i");

// 7. Do a swap on the sentence using the arguments provided and return the new sentence.
function swap(sentence, find, swap) {
  let sentenceArray = sentence.split(" ");

  for (let i = 0; i < sentenceArray.length; i++) {
    if (sentenceArray[i] === find) {
      //   console.log(sentenceArray[i][0]);

      if (sentenceArray[i][0].toUpperCase() === sentenceArray[i][0]) {
        // console.log(swap[0].toUpperCase());
        // console.log(sentenceArray);

        let upperSwap = swap.split("");

        let finalSwap = `${upperSwap[0].toUpperCase()}`;

        for (let n = 1; n < upperSwap.length; n++) {
          finalSwap += upperSwap[n];
        }

        sentenceArray.splice(i, 1, `${finalSwap}`);

        return sentenceArray.join(" ");
        // return finalSwap;
      } else {
        sentenceArray.splice(i, 1, `${swap}`);

        return sentenceArray.join(" ");
      }
    }
  }
}

console.log(swap("His name is Tom", "Tom", "john") == "His name is John");
console.log(
  swap("Let us get back to more Coding", "Coding", "algorithms") ==
    "Let us get back to more Algorithms"
);
console.log(
  swap("This has a spellngi error", "spellngi", "spelling") ==
    "This has a spelling error"
);
