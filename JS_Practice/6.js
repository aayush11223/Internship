//  function to flatten a nested array (1 level deep).

// process of converting multi-dimensional arrays into a single-dimensional array.

let arr = [1, [2, [3, [4, 5], 6], 7, 8], 9, 10];

console.log("Original Array:", arr);

let flatArrOne = arr.flat();

console.log("Array flattened to depth of 1:" + flatArrOne);

// Step 1: define a nested array `arr` that contains both numbers and sub-arrays.
// Step 2: use the `flat()` method on the array `arr` to flatten it to a depth of 1 and store the result in `flatArrOne`.
// Step 3: print the original array and the flattened array to the console. 