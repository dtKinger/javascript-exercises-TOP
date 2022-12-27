const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array){
  return array.reduce((p, c) => p + c, 0);
};

const multiply = function(array) {
  return array.reduce((p, c) => p * c, 1)
};


const power = function(a, b) {
	return a ** b;
};
// can also use " return Math.pow(a, b); "

// This is another implementation of Factorial that uses recursion
// THANKS to @ThirtyThreeB!
const factorial = function(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n-1);
};


/*
const total = a.reduce((p, c) => {
    return p + c;
  }, 0);
*/

/*
const totalYears = inventors.reduce((total, inventor) => {
  return total + totalb;
}, 0);
*/

/*
const multiply = function(array) {
  return array.length ? array.reduce((accumulator, nextItem) => accumulator * nextItem) : 0;
};
*/



// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
