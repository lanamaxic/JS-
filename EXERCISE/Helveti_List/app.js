/*const div = document.body.appendChild(document.createElement('div'));
div.style.width = '200px';
h2 = div.appendChild(document.createElement('h2'));
console.log(h2)


const h2 = document.body.appendChild(document.createElement('h2'));
h2.appendChild(document.createTextNode('HelvetiList'));
h2.style.fontFamily = 'Helvetica, Verdana, sans-serif'
h2.style.fontSize = '40px'
h2.style.margin = 0;
h2.style.padding = 0;


const li1 = document.body.appendChild(document.createElement('li'));
li1.appendChild(document.createTextNode('Zurich'));
li1.style.borderBottom = '1px solid #ccc';

const li2 = document.body.appendChild(document.createElement('li'));
li2.appendChild(document.createTextNode('Geneva'));
li2.style.borderBottom = '1px solid #ccc';

const li3 = document.body.appendChild(document.createElement('li'));
li3.appendChild(document.createTextNode('Winterthur'));
li3.style.borderBottom = '1px solid #ccc';

const li4 = document.body.appendChild(document.createElement('li'));
li4.appendChild(document.createTextNode('Lausanne'));
li4.style.borderBottom = '1px solid #ccc';

const li5 = document.body.appendChild(document.createElement('li'));
li5.appendChild(document.createTextNode('Lucerne'));
li5.style.borderBottom = 'none';*/

//make the same thing but using css file and classes

// Create element
//const li  = document.createElement('li');

// Add class
//li.className = 'collection-item';


//////////////////////////// 
let arr = ['Hamburg', 'Pula', 'Berlin', 'Zagreb']
const div = document.createElement('div');
div.className = 'div';

const h2 = document.createElement('h2');
h2.className = 'h2';
h2.textContent = 'Cities'
div.appendChild(h2);


const ul = document.createElement('ul');
ul.className = 'ul';
arr.forEach(function(item){
    const li = document.createElement('li');
    let a = document.createElement('a')
    a.innerText = item;
    li.appendChild(a);
    li.className = 'li';
    ul.appendChild(li);
})
div.appendChild(ul)
document.body.appendChild(div);






