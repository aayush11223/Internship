// function to find the first non-repeating character in a string

function nonRep(s) {
    let n = s.length;
    for (let i = 0; i < n; ++i) {
        let found = false;
        for (let j = 0; j < n; ++j) {
            if (i !== j && s[i] === s[j]) {
                found = true;
                break;
            }
        }
        if (!found) return s[i];
    }
    return null;
}

let s = "aabbcc";
console.log(nonRep(s));