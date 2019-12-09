/*const td = document.querySelectorAll('td');
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

let getValue = document.querySelector('.edit-area');*/

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






//GETTING MY TARGET
let table = document.getElementById('bagua-table');

//for saving my original td
let editingTd;

table.addEventListener('click', function(event){
//3 possible targets
let target = event.target.closest('.edit-cancel, .edit-ok, td')
if(target.className == 'edit-cancel'){
    finishTdEdit()
} else if(target.className == 'edit-ok'){
    finishTdEdit()
} else if(target.nodeName == 'TD'){
    makeTdEditable(target)
}
})



function finishTdEdit(td, isOk){
    console.log(td)
    if(isOk) {
        td.innerHTML = td.firstChild.value
    } else{
        td.innerHTML = editingTd.data
    }
}

//Event Handler: currently the real event target is the td
function makeTdEditable(event) {
    let td = event.target
    editingTd = {
        elem: td,
        data: td.innerHTML
    }

    //td is in edit state, css also styles the area inside
    td.classList.add('edit-td')

    //creating my text area
    let textArea = document.createElement('textarea')
    textArea.style.width = td.clientWidth + 'px';
    textArea.style.height = td.clientHeight + 'px';
    textArea.className = 'edit-area';
    textArea.value = td.innerHTML;
    td.innerHTML = '';
    td.appendChild(textArea);
    textArea.focus();

    td.insertAdjacentHTML('beforeEnd', '<div class="edit-controls"><button class="edit-ok">OK</button><button class="edit-cancel">Cancel</button></div>');
}