const btnTry = document.getElementById('try')
btnTry.addEventListener('click', focusMethod)

let counter = 0;
function focusMethod(){
    if(counter>2) {
        counter = 0
    }
    let arr = ['inpt', 'input', 'inputt']
    document.getElementById(arr[counter]).focus()
    
   counter ++;

}