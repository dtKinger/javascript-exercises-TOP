const repeatString = function(word, times) {
  let string = '';
  if (times < 0) return "ERROR";
  for (let i = 1; i <= times; i++){
    string += word;
  };
  return string;
};

// let para = document.querySelector('p');
// para.textContent = string;


// Do not edit below this line
module.exports = repeatString;
