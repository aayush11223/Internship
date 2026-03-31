// function to capitalize the first letter of each word in a string.

function titleCase(str) {
  let result = str[0].toUpperCase(); // capitalize the first letter

  for (let i = 1; i < str.length; i++) {
    
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i].toLowerCase();
    }
  }

  return result;
}

// Example:
console.log(titleCase("i'm a little tea pot")); 

// If previous character is a space, capitalize this one, otherwise make it lowercase.
//Moral is to capitalize the first letter of each word and make the rest lowercase.