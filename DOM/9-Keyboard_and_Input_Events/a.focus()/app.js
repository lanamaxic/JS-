const btnTry = document.getElementById('try')
btnTry.addEventListener('click', focusMethod)

let counter = 0;
function focusMethod(){
    if(counter>2) {
        counter = 0
    }
    let arr = ['inpt', 'input', 'inputt']
    if(counter == 0){
        document.getElementById(arr[2]).classList.remove('input_green');
        document.getElementById(arr[counter]).focus()
        document.getElementById(arr[counter]).classList.add('input_green')
    } else {
        document.getElementById(arr[counter-1]).classList.remove('input_green');
        document.getElementById(arr[counter]).focus()
        document.getElementById(arr[counter]).classList.add('input_green')
    }
        
   counter ++;

}