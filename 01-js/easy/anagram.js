/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // check if both the string have same length, if not then return false
  if (str1.length !== str2.length) {
    return false;
  } else {
    const sortedStr1 = str1.toLowerCase().split("").sort().join("");
    const sortedStr2 = str2.toLowerCase().split("").sort().join("");

    // compare both the sorted strings, if same return true
    if (sortedStr1 === sortedStr2) {
      return true;
    } else {
      console.log("both strings have some different characters");
      return false;
    }
  }
}

module.exports = isAnagram;
