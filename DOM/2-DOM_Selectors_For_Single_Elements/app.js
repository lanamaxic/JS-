//document.getElementById()
//console.log(document.getElementById('task-title'))

//GET THINGS FROM THE ELEMENT
//console.log(document.getElementById('task-title').className)



const taskTitle = document.getElementById('task-title');
//CHANGE THE STYLING
taskTitle.style.background = '#333';

taskTitle.style.color = '#fff';

taskTitle.style.padding = '5px';

//taskTitle.style.display = 'none';


//CHANGE THE CONTENT
taskTitle.textContent = 'Task List'
taskTitle.innerText = 'Saf1 Task'
taskTitle.innerHTML = '<span style = "color:red">Task List</span>';

//document.querySelector()
//console.log(document.querySelector('h5'));
console.log(document.querySelector('#task-title'));
//# stands for (id) getElementByID

//console.log(document.querySelector('.card-title'))


console.log(document.querySelector('li'));
document.querySelector('li').style.color = 'red';

document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:nth-child(3)').style.color = 'blue';

document.querySelector('li:nth-child(4)').textContent = 'Hello World';

document.querySelector('li:nth-child(odd)').style.background = '#ccc';

document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';