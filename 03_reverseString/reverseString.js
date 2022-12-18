
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
  // We counted up by counting down.
  
console.log(reverseChars);
  
  
  /*  
  for (let i = (words.length - 1); i >= 0; i--){
      
      reverseChars.push()
    }
    */
  // Split the words into an array of letters
  
  // Print the array in reverse order looping
  // backwards through the index
  // return reverseChars;
};

// Do not edit below this line
module.exports = reverseString;
