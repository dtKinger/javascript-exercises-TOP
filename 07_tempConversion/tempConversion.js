const convertToCelsius = function(fahren) {
  return parseFloat(((fahren - 32) * 5 / 9).toFixed(1));
};

const convertToFahrenheit = function(cels) {
  return +(((9 / 5 * cels) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
