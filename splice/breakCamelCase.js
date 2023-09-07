/**
 * Author: Yubin Jo
 * Date: 2023-09-07
 * Status: in-progress
 */

const spaceInsert = (newString, indexArr, regex) => {
  for (let i = 0; i < newString.length; i++) {
    if (newString[i].match(regex)) {
      newString.splice(indexArr[0], 1, ` ${newString[i].toUpperCase()}`);
      indexArr.shift();
    }
  }

  console.log(newString.join(""));
  return newString.join("");
};

const converter = (string, regex) => {
  let newString = string.split("");
  let indexArr = [];

  newString.forEach((char) => {
    if (char.match(regex)) {
      indexArr.push(newString.indexOf(char));
      // knowPublicPublicSmall
      // using indexOf makes the indexArr store
      // [ 4, 4, 16 ] instead of [4, 10, 16]
      // find another way to get the index
    }
  });

  console.log(indexArr);
  return spaceInsert(newString, indexArr, regex);
};

const checkUpperCase = (string, regex) => {
  if (regex.test(string)) {
    return converter(string, regex);
  } else {
    return string;
  }
};

// complete the function
function solution(string) {
  console.log(string);
  const regex = /[A-Z]/g;

  return checkUpperCase(string, regex);
}

solution("knowPublicPublicSmall");
