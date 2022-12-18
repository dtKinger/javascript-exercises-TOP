/*
let para = document.querySelector('p');
let sect = document.querySelector('section');
let button = document.querySelector('button');

button.addEventListener('click', repeatString)


const repeatString = function (string, num){
  // let words = string; // prompt("What do you want to say?");
  let times = num; // prompt("How many times to say it?");
  string = '';

  for (let i = 1; i <= times; i++){
    string += words;
  }
}

module.exports = repeatString;
*/

const repeatString = function(word, times) {
  // if (times < 0) return 'ERROR';
  let string = '';
  for (let i = 0; i < times; i++) {
    string += word;
  }
  return string;
};

module.exports = repeatString;
