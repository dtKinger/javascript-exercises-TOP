const fibonacci = function(n) {
  if (n < 0){
    return "OOPS";
  }
  let fibArray = [1, 1];
  for (let i = 1; i < n; i++){
    fibArray.push(fibArray[i] + fibArray[i - 1]);
 } 
 return fibArray[n - 1];
};


// Do not edit below this line
module.exports = fibonacci;