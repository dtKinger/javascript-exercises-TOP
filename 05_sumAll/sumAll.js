const sumAll = function(min, max) {
  let sum = null;
  let trueMin = null;
  let trueMax = null;

  // Test 3 - reassign based on order entered
  if (min < max){
    trueMin = min;
    trueMax = max;
  } else if (min > max){
    trueMin = max;
    trueMax = min;
  } else if (min === max){
    return sum = min + max;
  } else {
    trueMin = min;
    trueMax = max;
  };

  //test 4
  if (trueMin < 0 || trueMax < 0){
    return 'ERROR';
    // Tests 5 & 6
  } else if (typeof trueMin != "number" || typeof trueMax != "number"){
    return 'ERROR';
  };
  
  
  // Summation, tests 1 + 2
  for (let i = parseInt(trueMin); i <= parseInt(trueMax); i++){
    sum += i;
  };
  return sum;
};


// Do not edit below this line
module.exports = sumAll;
