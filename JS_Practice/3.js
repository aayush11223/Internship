// function to find the largest number in an array.

function findLargestNumber(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

let numbers = [5, 10, 3, 8, 15, 7];
console.log(findLargestNumber(numbers));

// Step 1: Initialize a variable largest to the first element of the array
// Step 2: Loop through the array starting from the second element
// Step 3: In each iteration, compare the current element with the largest element
// Step 4: If the current element is larger, update the largest variable
// Step 5: Return the largest element

