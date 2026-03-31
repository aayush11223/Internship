// function to remove duplicates from an array.

function getUnique(arr){
    
    let uniqueArr = [];
    
    // loop through array
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}

const array = [1, 2, 3, 2, 3];
getUnique(array);

// Step 1: Create an empty array uniqueArr to store unique values
// Step 2: Loop through each element i in the input array arr
// Step 3: Check if i is not already present in uniqueArr using indexOf method
// Step 4: If i is not present, push it to uniqueArr
// Step 5: After the loop, uniqueArr will contain only unique values from the input array
