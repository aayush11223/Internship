// function to reverse a string.

function reverseString(str) {
    let reversed = ''; 
   
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]; 
    }

    return reversed; 
}

let originalString = "hello";
let result = reverseString(originalString);
console.log(result); 

// Step 1: Create empty string to store reversed string
// Step 2: Loop through the original string from the last character to the first character
// Step 3: Append each character to the reversed string
// Step 4: Return the reversed string