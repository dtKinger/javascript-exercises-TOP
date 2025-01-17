const container = document.querySelector('#container');
let paraOne = document.createElement('p');
let paraTwo = document.createElement('p');
let divOne = document.createElement('div');
let divTwo = document.createElement('div');
let h1 = document.createElement('h1');
let h3 = document.createElement('h3');

paraOne.textContent = "Hey I'm red!";
paraOne.style.color = "red";
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";
container.append(paraOne, h3);
// container.append(h3);

divTwo.classList.add('bg-div'); 
paraTwo.textContent = "ME TOO!";
h1.textContent = "I'm in a div";
divTwo.append(h1, paraTwo);
// divTwo.append(paraTwo);
container.appendChild(divTwo);


/* =======================
Event handlers
======================= */

const btn2 = document.querySelector('#btn2');
btn2.onclick = () => alert("Hello, World!");

btn2.addEventListener('click', function (e) {
  e.target.classList.toggle('test');
});


const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
  alert("Hello,, World!");
});

/*
const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', alertHey);
function alertHey(){ alert('Hello,, World!!');};
*/