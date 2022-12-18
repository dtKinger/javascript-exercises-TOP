/*
let output = document.querySelector('.output');
output.innerHTML = '';

let i = 10;

while (i >= 0){
  const para = document.createElement('input');
  
  if (i === 0){
    para.textContent = `Blast off!!`;
  } else {
    para.textContent = `${i} seconds until blast off.`;
  }

  output.appendChild(para);

  i--
}
*/

/* 
people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

// Write a loop that will iterate through the people array.
for (const person of people){
  if (person == "Phil" || person == "Lola"){
    refused.textContent += `${person}, `;
  } else {
    admitted.textContent += `${person}, `;
  }  
}

refused.textContent =
refused.textContent.slice(0, (refused.textContent.length - 2)) + ".";

admitted.textContent =
admitted.textContent.slice(0, (admitted.textContent.length - 2)) + ".";
*/

// Result: [0, 1, 2]

for (let i = 0; i < 3; i++) {
  alert( `number ${i}!`);
}


// re-write as a while

let i = 0;
while (i < 3){
  alert( `number ${i}!` );
  i++
}


// REPEAT UNTIL THE INPUT IS CORRECT

// DONE
outter:
for (;;){
  let input = parseInt(prompt("Enter a number greater than 100."));
  console.log(input);
  if (input <= 100){
    alert("Error: enter a number GREATER than 100.");
    continue;
  } else if (input.isNan()){
    break outter;
  } else {
    alert('Thank you for doing your job!');
    break outter;
  }
}

// Output Prime numbers. Re-write the isPrime() function


const n = 10

let sect = document.querySelector('section')
let para = document.createElement('p')

// Simple loop to divide 3 by all numbers in the loop
para.textContent = "Hello, World.";

outter:
for (let i = 2; i <= n; i++) { // for each i up to 10 (n)

  for (let j = 2; j < i; j++){ // Divide by each number up to itself which will be i
    if (i % j == 0){
      continue outter; // not prime 
    }
  }
  para.textContent += `${i}, `;
}

sect.appendChild(para);