//Local Storage vs Session Storage
//They are exactly the same
//The only difference is:

//Local Storage keeps the saved data even you close the browser and you need to clear it manually

//Session Storage doesn't keep the data when you close the browser and open it again

//set local storage item
//the key and the value must be a string 
// localStorage.setItem('name', 'Mr. Robot')
// localStorage.setItem('name', 'Lana')
// localStorage.setItem('age', '28')

//set session storage item
//sessionStorage.setItem('name', 'Mr. Harris')

//remove from local storage
// localStorage.removeItem('name')

//get property from local storage
// const x = localStorage.getItem('name')
// const y = localStorage.getItem('age')


// //clear local storage
// localStorage.clear()
// console.log(x,y)


//////////////////////////////////////////////////////////
// function setFunction(key, value){
//    localStorage.setItem(key, value)
//    if(key != ''){
//        return false
//    } else {
//        return value
//    }
// }


// function removeFunction(key){
//     localStorage.removeItem(key)
// }

//function clearFunction(){
//localStorage.clear()
// }

// setFunction('name', 'Lana');
//////////////////////////////////////////////////////////

//add multiple properties with the same key but different values
///////////////////PHILIP WAY
// let tasks =[]; 
// document.querySelector('form').addEventListener('submit', function(e){
//     const task = document.getElementById('task').value
    
//     tasks.push(task)

//     localStorage.setItem('tasks', JSON.stringify(tasks))
    
//    // console.log(task.value)
//     e.preventDefault()
// })

////////////////SAFWAN WAY
document.querySelector('form').addEventListener('submit', function(e){
    const task = document.getElementById('task').value
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.push(task)

    localStorage.setItem('tasks', JSON.stringify(tasks))

    alert('Task Saved')
    
   // console.log(task.value)
    e.preventDefault()
})