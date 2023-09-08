/**
 * Title: Break camelCase
 * Author: Yubin Jo
 * Date: 2023-09-08
 * Status: in-progress
 * Link: https://www.codewars.com/kata/5208f99aee097e6552000148
 * Instructions: break the camelcase
 * camelCase => camel Case
 */

const solution = (string) => {
  const regex = /[A-Z]/g;

  return string
    .split("")
    .map((char) => {
      if (char.match(regex)) {
        return ` ${char.toUpperCase()}`;
      } else return char;
    })
    .join("");
};

const result = solution("knowPublicPublicSmall");
console.log(result);
