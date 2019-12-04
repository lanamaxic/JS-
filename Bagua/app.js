const td = document.querySelectorAll('td');
console.log(td)

let arr = Array.from(td);

arr.forEach(function(e){
    e.addEventListener('click', myFunc)
    //e.addEventListener('click', myFunc).value
}
)

function myFunc(e){
    e.target.insertAdjacentHTML('beforeend',`<div class="edit-controls"><button class="edit-ok">OK</button><button class ="edit-cancel">CANCEL</button></div>`)
    e.target.insertAdjacentHTML('beforeend',`<textarea class="edit-area">` )
}

arr.classList.add('edit-td'); //td is in edit state, CSS also styles the area inside
//let arrToStr = arr.toString();
//console.log(arrToStr)

const tArea = document.createElement('textarea');
tArea.style.width = td.clientWidth + 'px';
tArea.style.height = td.clientHeight + 'px';
tArea.className = 'edit-area';
tArea.value = td.innerHTML;
td.innerHTML = "";
td.appendChild(tArea)

let getValue = document.querySelector('.edit-area');

/*
document.addEventListener("click", function (event) {
var aux =event.target
//console.log(aux)
let x = aux.innerHTML
aux.innerHTML = ""
let textArea = document.createElement('textarea')
textArea.style.width = aux.clientWidth + 'px'
textArea.style.height = aux.clientHeight + 'px'
textArea.className = 'edit-area';
textArea.value = x
aux.appendChild(textArea);
aux.insertAdjacentHTML("beforeEnd", '<div class="edit-controls"><button class="edit-ok">OK</button><button class="edit-cancel">CANCEL</button></div>')
});

*/
/*
<textarea name="justtext" id="justtext"></textarea>

var msg = document.querySelector("#justtext").value;
*/
//arr.innerHTML = '';
//arr.appendChild(tArea)
//arrToStr.innerHTML = '';
//arrToStr.appendChild(tArea);


//tArea.appendChild()