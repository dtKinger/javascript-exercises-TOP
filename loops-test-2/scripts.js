const nameMatch = 'Mustafa';
    const para = document.createElement('p');
    const newList = document.createElement('ul');
    const list = document.querySelector('ul');
    const listItem = document.createElement('li');
    const sect = document.querySelector('section');

    const phonebook = [
      { name : 'Chris', number : '1549' },
      { name : 'Li Kang', number : '9634' },
      { name : 'Anne', number : '9065' },
      { name : 'Francesca', number : '3001' },
      { name : 'Mustafa', number : '6888' },
      { name : 'Tina', number : '4312' },
      { name : 'Bert', number : '7780' },
      { name : 'Jada', number : '2282' },
    ]

    // Add your code here
        // console.log(phonebook);
        // console.log(phonebook[1].name);
    
    let i = 0
    outter:
    while (i < phonebook.length){
      // When you find Mustafa, do the thing then break
      if ((phonebook[i].name).toLowerCase() === nameMatch.toLowerCase()){
        // outputs the name and phone number into the paragraph (para)
            // 1. DONE - store createElement('p') in para
            // 2. Add textContent to para for i
            // 3. appendChild para to the section. NOT NEEDED FOR P TAGS
            // LIKE HOW IT IS FOR LIST ITEMS
            
          para.textContent = `${phonebook[i].name}, ${phonebook[i].number}.`
        
            /* to Append it in a list
        listItem.textContent = `${phonebook[i].name}, ${phonebook[i].number}.`
        sect.appendChild(newList);
        newList.appendChild(listItem);
        */
  
        // Then exit the loop
        break outter;
      }

      i++
    }

    // Don't edit the code below here!
    const section = document.querySelector('section');
    section.appendChild(para);