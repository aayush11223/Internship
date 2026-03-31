// function to check if two strings are anagrams.

function areAnagrams(s1, s2) {

    if (s1.length !== s2.length) return false;

    // Sort both strings
    s1 = s1.split('').sort().join('');
    s2 = s2.split('').sort().join('');

    return s1 === s2;
}

// Driver Code
const s1 = "geeks";
const s2 = "kseeg";
if (areAnagrams(s1, s2)) {
    console.log("true");
}
else {
    console.log("false");
}

// Step 1: take two String
// Step 2: Check the length of both string if not equal return false
// Step 3: Sort both string and compare if they are equal return true else false
