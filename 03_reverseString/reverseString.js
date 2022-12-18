
const reverseString = function(string) {
  // Store the string in a variable and split it
  // it into characters, creating an Array we can iterate on.
  let chars = string.split('');
  // initialize reverseChars as empty
  let reverseChars = '';
  // Loop through the 'chars' array starting at the last character
  // working our way backwards to first index[0]
  // Add that character to a new string variable. 
  for (let i = chars.length-1; i >= 0; i--){
    reverseChars += `${chars[i]}`;
  }
  return reverseChars;
  // We counted up by counting down.
};
  

// Do not edit below this line
module.exports = reverseString;