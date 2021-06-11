// In this problem you will be given an array/list of integers. You need to find the largest value and the smallest value in the array. Finally you need to return the difference (largest value - smallest value) of the two values.
// Example:
arr = [15, 22, 84, 14, 88, 23];
//74

//iterate over the array
//capture the largest and smallest values in seperate variables
//subtract one from the other
//return the difference
function minMaxDiff(arr) {
  min = Math.min(...arr);
  max = Math.max(...arr);
  result = max - min;
  return result;
}
//   result = max - min;
//   for (i = 0; i < arr; i++) {
//     if (i > max) {
//       i = max;
//     }
//     if (i < min) {
//       i = min;
//     }
//     console.log(min, max);
//   }
