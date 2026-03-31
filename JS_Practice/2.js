// function to check if a string is a palindrome.

function isPalindrome(str) {
    let j = str.length - 1
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[j]) {
            return false;
        }
        j--;
    }
    return true;
}

let str1 = "racecar";
let str2 = "nitin";
let str3 = "Rama";

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));

// Step 1: Initialize a variable j to the index of the last character of the string
// Step 2: Loop through the string from the first character to the middle character
// Step 3: In each iteration, compare the character at index i with the character at index j
// Step 4: If the characters are not equal, return false
// Step 5: If the loop completes without finding any unequal characters, return true