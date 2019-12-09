const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// Clear input
taskInput.value = '';
console.log(taskInput)

// Submit
//form.addEventListener('submit', runEvent)

//Keydown
taskInput.addEventListener('keydown', runEvent)

//Keypress
//taskInput.addEventListener('keypress', runEvent)

//Focus
//taskInput.addEventListener('focus', runEvent)

//Blur
//taskInput.addEventListener('blur', runEvent)

//Change
//select.addEventListener('change', runEvent);

// Event Handler

function runEvent(e){
   //e.preventDefault();
   console.log(`Event Type: ${e.key} `);
   heading.innerText = e.target.value;
}

////////////EXERCISE///////////////


select.addEventListener('change', function (e) {
    document.querySelector('#task-title').innerHTML = select.value
    const li = document.querySelectorAll('li');
    console.log(li[select.value-1]);
    li[select.value-1].style.backgroundColor = 'red'; 
    
})

