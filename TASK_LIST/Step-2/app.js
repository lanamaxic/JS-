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
function loadEventListeners() {

    //DOM Load event
    document.addEventListener('DOMContentLoaded', getTasks)

    //Add Task Event
    form.addEventListener('submit', addTask)

    //Remove Task Event
    taskList.addEventListener('click', removeTask)

    //Clear Tasks event
    clearBtn.addEventListener('click', clearBtn)

    //Filter tasks even
    filter.addEventListener('keyup', filterTasks)

    //Get Tasks from LS
    function getTasks(){
        //initialize tasks
        let tasks;
        if()
        //check if there is any tasks in LS
        //if tasks === null then tasks = []
        //else tasks = the array from LS
        //loop in tasks array
        //for every item create list item
        //the text is the task
    }


}
//Add Task Event Handler
function addTask(e) {
    //Check if the Task Input is empty
    console.log(!taskInput.value)
    if (!taskInput.value) {
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

//Store Task
function storeTaskInLocalStorage(task) {
    //Initialize the Tasks Array
    let deletedTasks;
    //Getting the Tasks Array from LS and Check if there is no Tasks yet,
    //define it as empty array
    if (localStorage.getItem('deletedTasks') === null) {
        tasks = []
        //else take it ready and assign it to tasks array
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    //push the task to it
    tasks.push(task)
    //save it back to the local storage
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

console.log(tasks);


//Remove Task Event handler
function removeTask(e) {
    //choosing our target: class ".delete-item"
    // let target = e.target.closest('.delete-item')
    // if(target){
    //     target.parentElement.remove()
    // }
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you sure')) {
            e.target.parentElement.parentElement.remove();
            //Remove from LS
            removeTaskFromLocalStorage(e.target.parentElement.parentElement)

        }
    }

}

//Remove from the LS
function removeTaskFromLocalStorage(taskItem) {
    console.log(taskItem)
    //Initialize the tasks array
    let deletedTasks;
    //check if there is any tasks in the LocalStorage
    if (localStorage.getItem('deletedTasks') === null) {

    //if there is no tasks: then tasks = []
    deletedTasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('deletedTasks')); // tasks is the key here; everything is here a STRING with parse we get the original object-structure
    }

    //Push the task to it
    deletedTasks.push(taskItem.textContent)
    //loop inside the tasks array
    //don't use the forEach when you are changing the same array
    for (i = 0; i < tasks.length; i++) {
    //if the task in the task item matches with any task 

    if (tasks[i] == taskItem.textContent) {
    //then remove it from the tasks array
    tasks.splice(i, 1)
    }
    //after the loop finish reset the tasks array to LS
    localStorage.setItem('tasks', JSON.stringify(tasks))
    }
}

//Clear tasks
function clearTasks(){
    localStorage.clear()
}


//Clear Tasks event handler
function clearTasks(e) {
    //taskList.innerHTML = ''

    //Faster: taskList.firstChild
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild)
    }
    e.preventDefault();
}

// https://jsperf.com/innerhtml-vs-removechild

////////////SAFWAN'S WAY/////////////////////
function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function (task) {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}

////////////PHILIP'S WAY/////////////////
function filterTasks(e) {
    Array.from(taskList.children).forEach(function (item) {
        item.style.display = (item.textContent.toLowerCase().includes(e.target.value.toLowerCase()) ? 'block' : 'none')
    })
}

//////////////EREN'S WAY/////////////////
// function filterTasks(e){
//     Array.from(taskList.children).forEach(function(item){
//         if(item.textContent.toLowerCase().includes
//         (e.target.value.toLowerCase())) {
//             item.style.display = 'block'
//         }
//         else {
//             item.style.display = 'none'
//         }
//     })
// }