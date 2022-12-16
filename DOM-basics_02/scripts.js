const ul = document.querySelector('ul');
let input = document.querySelector('input');
const button = document.querySelector('button');

const rmvItm = document.querySelectorAll('.btn-delete')

// makeBtn.setAttribute('class', 'btn-delete');



button.addEventListener('click', addItem);

function addItem(){
  let item = input.value;
  input.value = '';
  input.focus();
  console.log(item);
  
  // Create 3 new elements, and assign them
  // to local variables

  const newLi = document.createElement('li');
  const newSpan = document.createElement('span');
  const newButton = document.createElement('button');

  // Append the spans and buttons as children of <li>
  newLi.appendChild(newSpan);
  newLi.appendChild(newButton);

  // give them values
  newSpan.textContent = item;
  newButton.textContent = "Delete";

  // Finally, append the <li> to the Unordered List
  // which completes a chain and shows everything.
  ul.appendChild(newLi);

  // The created buttons are already stored in 
  // newButton. We add this second event listener
  // inside the same function because it 
  newButton.addEventListener('click', removeItem);
  function removeItem(){
    newLi.remove(); // Works because ability to remove self is new
    // alternate is ul.removeChild(newLi);
  }
};





  

