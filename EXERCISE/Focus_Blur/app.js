///////////////exercise 1//////////////////
let focus = document.getElementById('task')
focus.addEventListener('click', focusFuction);


let blur = document.getElementById('task')
blur.addEventListener('click', blurFunction);

function focusFunction(){
    document.getElementById("demo").innerHTML = "on Focus";
  
}

function blurFunction(){
    document.getElementById("demo").innerHTML = "on Blur";
}

