const btn = document.querySelector('.button');
const result = document.querySelector('.ul');
const input = document.querySelector('#input');


btn.onclick = () => {
  let newTask = document.createElement('li');
  newTask.className = 'li'
  newTask.innerText = input.value
  input.value = ''
  result.appendChild(newTask)

  let close = document.createElement('input')
  close.type = 'checkbox'
  close.className = 'done'
  newTask.appendChild(close)
  newTask.style.cursor = 'pointer'
  close.onclick = () =>{
    result.removeChild(newTask)
  }
}


// btn.addEventListener('click', (e) => {
//   // if (input.value === '') return
//   createDeleteElements(input.value)
//   input.value =''
// })

// function createDeleteElements(value) {
//   const li= document.createElement('li');
//   li.className = "li";
//   li.textContent = value
//   result.appendChild(li)

//   const btn = document.createElement('button');
//   btn.className = "button";
//   btn.textContent = 'done'
//   li.appendChild(btn)
// }



// function addTask(e) {
//   e.preventDefault();
//   let inputText = input.value;
//   let li= document.createElement('li');
//   li.className = "li";
//   let textNode = document.createTextNode(inputText)
//   ul.appendChild(textNode);
//    ul.prepend(li)
//   //

//   let checkbox = document.createElement('input')
//   checkbox.type = 'checkbox'
//   checkbox.addEventListener('click', function(e){
    
//   })
// }
