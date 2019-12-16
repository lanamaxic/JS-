//Define UI Variables
const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

// console.log(form, taskInput, clearBtn, filter, taskInput)

//Load all event listeners
loadEventListeners();

//Defining the function that loads all event listeners
function loadEventListeners(){
//Add Task Event
form.addEventListener('submit', addTask)

//Remove Task Event
taskList.addEventListener('click', removeTask)

//Clear Tasks event
clearBtn.addEventListener()

}
//Add Task Event Handler
function addTask(e){
    //Check if the Task Input is empty
    console.log(!taskInput.value)
    if(!taskInput.value){
        alert('Add a task')
    }
    //create li element
    const li = document.createElement('li')
    
    //Style the li: using class
    li.className = 'collection-item'
    
    //Create a Text Node and append to li
    li.appendChild(document.createTextNode(taskInput.value))
    
    //Create a new link element
    const link = document.createElement('a')
    
    //Give the link a style: using class
    link.className = 'delete-item secondary-content'
    
    //Add an icon html //class="fa fa-remove"
    link.innerHTML = '<i class="fa fa-remove"></i>'
    
    //Append the link to li
    li.appendChild(link)
    
    //Append the li to ul
    taskList.appendChild(li)
    
    //Clean the task Input
    taskInput.value = ''
    
     e.preventDefault();
    }

//Remove Task Event handler
function removeTask(e){
  //choosing our target: class ".delete-item"
    let target = e.target.closest('.delete-item').parentElement
    target.remove()
    console.log(target)
}