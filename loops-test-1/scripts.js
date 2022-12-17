const myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];
    const list = document.createElement('ul');

    // Add your code here

    // Don't edit the code below here!

    const section = document.querySelector('section');
    section.appendChild(list);



// Loop through the array

for (let i = 0; i < myArray.length; i++){
  // 1. Print items inside a <li></li> and // [createElement('li')]
  // 2. Give the created element text content
  // 3. append to the ul 'list' // [appendChild(item)]
  
  let item = document.createElement('li');
  item.textContent = myArray[i];
  list.appendChild(item);

};