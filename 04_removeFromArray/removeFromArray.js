// The easiest way to get an array of all of the arguments
// that are passed to a function
// is using the rest operator. If this is unfamiliar to you look it up!
const removeFromArray = function(...args) {
  const array = args[0];
  const newArray = [];

  array.forEach((item) => {
    if (!args.includes(item)){
      newArray.push(item);
    }
  });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;

// [1, 2, 3, 4]
