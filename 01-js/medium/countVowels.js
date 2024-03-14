/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const lowerStr = str.toLowerCase().split("").sort().join("").trim();
  const vowels = "aeiou";
  let count = 0;

  for (let i of lowerStr) {
    for (let j of vowels) {
      if (i == j) {
        count += 1;
      }
    }
  }
  return count;
}


module.exports = countVowels;
