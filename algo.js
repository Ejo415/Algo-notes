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

// Multiple Pointers

// Implement a function called countUniqueValues which accepts a sorted Array, and counts the unique values in the Array. There can be negative numbers in the Array, but it will always be sorted.

//my solution

// function countUniqueValues(arr) {
//   if (arr.length === 0) return 0;
//   let left = 0;
//   let right = 1;
//   while (right < arr.length) {
//     if (arr[left] === arr[right]) {
//       right++;
//     } else {
//       left++;
//       arr[left] = arr[right];
//       right++;
//     }
//   }
//   return left + 1;
// }

//refactor

// function countUniqueValues(arr) {
//     if (arr.length === 0) return 0
//     let i = 0;
//     for (let j = 1; j < arr.length; j++) {
//         if (arr[i] !== arr[j]) {
//             i++
//             arr[i] = arr[j]
//         }
//     }
//     return i + 1;
// }
