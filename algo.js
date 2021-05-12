// Anagrams

// Given two strings, write a function to determine if the second string is an anagram of the first,An anagram is a word, phrase or name formed by rearranging the letters of another. Such as cinema formed from iceman.

// function validAnagram(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }
//   let word1 = [];
//   let word2 = [];
//   for (let letter of str1) {
//     word1[letter] = (word1[letter] || 0) + 1;
//   }
//   for (let val of str2) {
//     word2[val] = (word2[val] || 0) + 1;
//   }
//   console.log(word1);
//   console.log(word2);
//   for (let key in word1) {
//     if (word1[key] !== word2[key]) {
//       return false;
//     }
//   }
//   return true;
// }
