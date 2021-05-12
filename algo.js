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

//refactored solution

// function validAnagram(first, second) {
//     if (first.length !== second.length) {
//       return false;
//     }

//     const lookup = {};

//     for (let i = 0; i < first.length; i++) {
//       let letter = first[i];
//       // if letter exists, increment, otherwise set to 1
//       lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
//     }
//     console.log(lookup)

//     for (let i = 0; i < second.length; i++) {
//       let letter = second[i];
//       // can't find letter or letter is zero then it's not an anagram
//       if (!lookup[letter]) {
//         return false;
//       } else {
//         lookup[letter] -= 1;
//       }
//     }

//     return true;
//   }
