// Anagrams

// Given two strings, write a function to determine if the second string is an anagram of the first,An anagram is a word, phrase or name formed by rearranging the letters of another. Such as cinema formed from iceman.

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let word1 = {};
  let word2 = {};
  for (let letter of str1) {
    word1[letter] = (word1[letter] || 0) + 1;
  }
  for (let letter of str2) {
    word2[letter] = (word2[letter] || 0) + 1;
  }

  for (let key in word1) {
    if (word1[key] !== word2[key]) {
      return false;
    }
  }
  return true;
}

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

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let left = 0;
  let right = 1;
  while (right < arr.length) {
    if (arr[left] === arr[right]) {
      right++;
    } else {
      left++;
      arr[left] = arr[right];
      right++;
    }
  }
  return left + 1;
}

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

// 'Write a function called sameFreqency. Given two positive integers find out of the numbers have the same frequency of digits. Must be O(n) '

function sameFrequency(int1, int2) {
  let strInt1 = int1.toString();
  let strInt2 = int2.toString();
  let num1 = {};
  let num2 = {};
  for (let number of strInt1) {
    num1[number] = (num1[number] || 0) + 1;
  }
  for (let number of strInt2) {
    num2[number] = (num2[number] || 0) + 1;
  }

  for (let key in num1) {
    if (num1[key] !== num2[key]) {
      return false;
    }
  }
  return true;
}

// 'Write a function called areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. Can solve using freq counter or Multiple pointers'

function areThereDuplicates() {
  let input = {};
  for (let i = 0; i < arguments.length; i++) {
    if (input.hasOwnProperty(arguments[i])) {
      return true;
    } else {
      input[arguments[i]] = 1;
    }
  }
  return false;
}

// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be  more than one pair that matches the average target.

//defne pointers
//add and average both pointers
//if average === n return true
//if false move pointer

function averagePair(arr, n) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let avg = (arr[left] + arr[right]) / 2;
    if (avg === n) return true;
    else if (avg > n) right--;
    else left++;
  }
  return false;
}

// Write a function called isSubsequence which takes two string and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, *without changing the order*

function isSubsequence(str1, str2) {
  //initialize pointers in each string.
  //compare pointers to see if they ===
  // if they do continue down string
  //if they dont return false
  //end at end if first string
  let left = 0;
  let right = 0;
  if (!str1) return true;
  while (right < str2.length) {
    if (str1[left] === str2[right]) left++;
    if (left === str1.length) return true;
    right++;
  }
  return false;
}

// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

// Note that a subarray must consist of CONSECUTIVE elements from the original array. In the first example below [100, 200, 300] is a subarray of the orignal array, but [100, 300] is not

//         maxSubarraySum([100,200,300,400], 2) -> 700
//         maxSubarraySum([1,4,2,10,23,3,1,0,20], 4) -> 39
//         maxSubarraySum([2,3], 3 ) -> null

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (num > arr.length) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.Math

// This function should return the minimal length of a CONTIGUOUS subarray of which the sum is greater than or equal to the integer passed to the function. If there isnt onemptied, return 0 instead

// minSubArrayLen([2,3,1,2,4,3], 7) -> 2 (because [4,3] is the smallest subarray)
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) -> 1 (because 62 is greater than the single int)

//init
function minSubArrayLen(arr, num) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < arr.length) {
    if (total < sum && end < arr.length) {
      total += arr[end];
      end++;
    } else if (total >= num) {
      minLen = Math.min(minLen, end - start);
      total -= arr[start];
      start++;
    } else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}

// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all the distinct characters

// findLongestSubstring('') -> 0
// findLongestSubstring('rithmschool') -> 7
// findLongestSubstring('bbbbbb') -> 1
// findLongestSubstring('findlongestsubstring') -> 8

function findLongestSubstring(str) {
  if (str.length === 0) return 0;
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    longest = Math.max(longest, i - start + 1);
    seen[char] = i + 1;
  }
  return longest;
}

// Given an integer number n, return the difference between the product of its digits and the sum of its digits.

function subtractProductAndSum(n) {
  let values = n.toString();
  let p = 1;
  let s = 0;
  for (let i = 0; i < values.length; i++) {
    p *= values[i];
    s += parseFloat(values[i]);
  }
  return p - s;
}

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

let reverse = (x) => {
  let num = x.toString();
  let newNum = [];
  let maxInt = Math.pow(2, 31) - 1;
  let minInt = Math.pow(-2, 31);

  for (let i = num.length - 1; i >= 0; i--) {
    if (num[i] === "-") {
      newNum.unshift("-");
    } else {
      newNum.push(num[i]);
    }
  }
  let result = newNum.join("");
  parseFloat(result);
  console.log(result);
  if (result > maxInt || result < minInt) {
    result = 0;
  }
  return result;
};

// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

// Example

// candles = [4,4,1,3]

// The maximum height candles are 4 units high. There are 2 of them, so return 2.

function birthdayCakeCandles(candles) {
  let maxHeight = 0;
  let count = 0;
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] > maxHeight) {
      maxHeight = candles[i];
      count = 1;
    } else if (candles[i] === maxHeight) {
      count += 1;
    }
  }
  return count;
}

// Given an array of integers, find the sum of its elements.

function simpleArraySum(ar) {
  let res = 0;
  for (let num of ar) {
    res += num;
  }
  return res;
}

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

const twoSum = function (nums, target) {
  let numIndex = new Map();
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let complement = target - num;
    if (numIndex.has(complement)) {
      res[0] = numIndex.get(complement);
      res[1] = i;

      return res;
    }
    numIndex.set(num, i);
  }
  return res;
};

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

var maxProfit = function (prices) {
  let minBuyPrice = Infinity;
  let maxProfit = 0;

  for (let price of prices) {
    if (price < minBuyPrice) {
      minBuyPrice = price;
    } else if (price - minBuyPrice > maxProfit) {
      maxProfit = price - minBuyPrice;
    }
  }

  return maxProfit;
};

// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

var firstUniqChar = function (s) {
  let frequencies = {};
  let result = -1;

  for (let char of s) {
    if (frequencies[char] === undefined) {
      frequencies[char] = 1;
    } else {
      frequencies[char]++;
    }
  }
};
