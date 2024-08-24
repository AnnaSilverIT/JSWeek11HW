const input = document.querySelector('.input')
const wrapper =document.querySelector('.textWrapper')
const ul = document.querySelector('.ul')

form.addEventListener('submit', addTask)

function addTask(e) {
  e.preventDefault();
  let input = document.querySelector('.inputTask');
  let inputText = input.value;
  let li= document.createElement('li');
  li.className = 'li';
  let textNode = document.createTextNode(inputText)
  li.appendChild(textNode);
  ul.prepend(li)

  //

  let checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.addEventListener('click', function(e){
    
  })
}
