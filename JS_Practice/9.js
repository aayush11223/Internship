//function to bubble sort an array
// Bubble sort Implementation using Javascript
// Creating the bblSort function

function bblSort(arr) {

    for (var i = 0; i < arr.length; i++) {

        // Last i elements are already in place  
        for (var j = 0; j < (arr.length - i - 1); j++) {

            // Checking if the item at present iteration 
            // is greater than the next iteration
            if (arr[j] > arr[j + 1]) {

                // If the condition is true
                // then swap them
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }

    // Print the sorted array
    console.log(arr);
}

// This is our unsorted array
var arr = [1,2,5,3];

// Now pass this array to the bblSort() function
bblSort(arr);

// main idea is to move largest element to the end of the array in each iteration, and make a bubble of the array that is at the end of the array