//  function that counts vowels in a string.

const cVowels = (s) => {
    let count = 0;

    for (const char of s) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
            char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
            count++;
        }
    }

    return count;
};

const s = "Aayush";
console.log(cVowels(s));

// Step 1: define a function `cVowels` that takes a string `s` as an argument.
// Step 2: initialize a variable `count` to 0 to keep track of the number of vowels.
// Step 3: iterate through each character in the string `s` using a for...of loop.
// Step 4: check if the current character is a vowel (both lowercase and uppercase) using an if statement.
// Step 5: if the character is a vowel, increment the `count` variable by 1.