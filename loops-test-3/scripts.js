let x = 500;
const para = document.createElement('p');

function isPrime(num) {
  for(let i = 2; i < num; i++) {
    if(num % i === 0) {
      return false;
    }
  }

  return true;
}

// Add your code here

do {
  
  if (isPrime(x)){
    para.innerHTML += x + "<br>";
  }

  x--
} while (x >= 2 && x <= 500);



// Don't edit the code below here!
const section = document.querySelector('section');
section.appendChild(para);