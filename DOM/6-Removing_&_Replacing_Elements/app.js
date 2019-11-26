//REPLACE ELEMENTS

//Create Element
/*const newHeading = document.createElement('h2');

// Add id
newHeading.id = 'task-title';

// New text node
//let val = document.createTextNode('Easy Peasy')
//val = document.querySelector('li').textContent
//console.log(val);
newHeading.appendChild(document.createTextNode('Task List')); //don't use innerText or textContent anymore, textNode is an object, textContent is a string

// Get the old heading
const oldHeading = document.getElementById('task-title');

//Parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);

//EXERCISE REPLACE LI WITH A NEW ONE(replace text node)
const listText = document.querySelector('.collection-item').firstChild;
console.log(listText)
let newText = document.createTextNode('New Item')
let firstLi = document.querySelector('.collection-item')
//firstLi.replaceChild(newText,listText)

// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[0].remove();

// Remove child element
list.removeChild(lis[3]);

let listt = Array.from(document.querySelectorAll('li'));

listt.forEach(function(item) {
    console.log(item);
    if (item.innerText == 'DONE')
    item.remove();
});*/


/*//CLASSES & ATTR
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

// Classes
val = link.className;
val = link.classList;//DOMToken List
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;

// Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'Google'); //make a new attribute
val = link.hasAttribute('title'); //check if there is an attribute, returns boolean value
link.removeAttribute('title');
val = link;

console.log(val);

////EXERCISE 1/////

const li = Array.from(document.querySelectorAll('li'));
li.forEach(function(item) {
    
    if (item.innerText == 'DONE'){
        item.firstElementChild.setAttribute('href', 'https://digitalcareerinstitute.org');
    }       
    }); */

////////EXERCISE 2///////////
const del = Array.from(document.querySelectorAll('.delete-item'));//=> <a>

del.forEach(function(item){
  
  item.addEventListener('click',function(i){
      console.log(i.target)
      item.parentElement.remove();
  })
})
