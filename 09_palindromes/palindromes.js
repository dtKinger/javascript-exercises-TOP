const palindromes = function (string) {
// Get a string, and remove all
// punctuation, spaces, and use .toLowerCase()
  let stripped = string
                    .replace(/[^\w\s\']|_/g, "")
                    .replace(/\s+/g, "")
                    .toLowerCase();
  let palindromify = Array.from(stripped).reverse().join(""); // stripped => arrayify => reversify => join into palindromify check.
  // Compare reading the reversed string and the original string. if ===, then true.
  if (palindromify === stripped) {
    return true;
  } else {
    return false;
  };
};


// Do not edit below this line
module.exports = palindromes;
