//Get the 2 <button> elements
const btnF = document.getElementById('focus')
const btnB = document.getElementById('blur')

//make variable for the input and div
const input = document.getElementById('userName')
const div = document.getElementById('status')


//adding the event listeners to my buttons
btnF.addEventListener('click', do_focus)
btnB.addEventListener('click', do_blur)

//adding the event listeners to my input
input.addEventListener('focus', logf)
input.addEventListener('blur', logb)

//defining the event handlers
function do_focus(){
    document.getElementById('userName').focus();
}

function do_blur(){
    document.getElementById('userName').blur();
}

function logf(){
    div.innerText = 'on Focus'
}

function logb(){
    div.innerText = 'on Blur'
}





////my solution but not finished
/*let focus = document.getElementById('task')
focus.addEventListener('click', focusFuction);


let blur = document.getElementById('task')
blur.addEventListener('click', blurFunction);

function focusFunction(){
    document.getElementById("demo").innerHTML = "on Focus";
  
}

function blurFunction(){
    document.getElementById("demo").innerHTML = "on Blur";
}*/

