const addBtn = document.getElementById('addButton');
const clearBtn = document.getElementById('clearButton');
const result = document.querySelector('.ul');
const input = document.querySelector('#input');
const noTask = document.querySelector('.noTask')

addBtn.onclick = () => { 
  if (input.value != false){
  let newTask = document.createElement('li');
  newTask.className = 'li'
  newTask.innerText = input.value
  input.value = ''
  result.appendChild(newTask)

  let taskDone = document.createElement('input')
  taskDone.type = 'checkbox'
  taskDone.className = 'done'
  newTask.appendChild(taskDone)
  newTask.style.cursor = 'pointer'
  noTask.style.display = 'none'
  clearBtn.disabled = false
  // localStorage.setItem('key', JSON.stringify(input.value))
  let inpValue = input.value
  let arr = {text: inpValue}
  localStorage.setItem('taskslist', JSON.stringify(arr))
}
}


clearBtn.addEventListener('click' , function(e) {
  e.preventDefault
  noTask.style.display = 'flex'
  result.innerHTML = ''
clearBtn.disabled= true
}) 