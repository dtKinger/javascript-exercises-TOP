/* TRY NUMBER 5 */

const findTheOldest = function(array){
  return array.reduce((oldestSoFar, comparison) => {
    const oldestAge = getAge(oldestSoFar.yearOfDeath, oldestSoFar.yearOfBirth);
    const comparisonAge = getAge(comparison.yearOfDeath, comparison.yearOfBirth);
    return oldestAge > comparisonAge ? oldestSoFar : comparison;
  }, 0);
};

function getAge(deathYear, birthYear){
  if (!deathYear){
    deathYear = new Date().getFullYear();
  }
  return (deathYear - birthYear);
};


/* TRY NUMBER 4 */
/*
const findTheOldest = function(array) {
  return array.reduce((oldestPerson, comparison) => {
  const oldestPersonAge = getAge(oldestPerson.yearOfDeath, oldestPerson.yearOfBirth);
  const comparisonAge = getAge(comparison.yearOfDeath, comparison.yearOfBirth);
  return oldestPersonAge > comparisonAge ? oldestPerson : comparison;
  })
};

function getAge(death, birth){
  if (!death){
    death = (new Date().getFullYear());
  } 
  return (death - birth);
};
*/

// Do not edit below this line
module.exports = findTheOldest;


/* TRY NUMBER 3 
const findTheOldest = function(array){
  if (!array.yearOfDeath){
    deathDate = (new Date().getFullYear())
  } else {
    deathDate = array.yearOfDeath
  };
  
  const oldest = array.sort((a, b) => {
    const lastGuy = deathDate - a.yearOfBirth;
    const nextGuy = deathDate - b.yearOfBirth;
    return lastGuy > nextGuy ? 1 : -1;
  });
  console.table(oldest);
  return oldest[0].name;
};
*/

/* TRY NUMBER 2 
const findTheOldest = function(array) {
  const oldest = array.sort((a, b) => {
    let lastGuy = (new Date().getFullYear() - a.yearOfBirth);
    let nextGuy = (new Date().getFullYear() - b.yearOfBirth);
    console.table(oldest);
  });
};
*/

/* TRY NUMBER 1
const findTheOldest = function(array) {
  const oldest = array.reduce((initial, compare) => {
    if (new Date()
                .getFullYear() - array.yearOfBirth > initial){
      console.log(intial);
      return compare;
    } else {
      return initial;
    }
  }, 0);
  return oldest.name;
};
*/ 

