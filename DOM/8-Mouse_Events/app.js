const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');



// Click
//clearBtn.addEventListener('click', runEvent);

// Doubleclick
//clearBtn.addEventListener('dblclick', runEvent);

// Mousedown
// clearBtn.addEventListener('mousedown', runEvent);

// Mouseup
//clearBtn.addEventListener('mouseup', runEvent);

// Mouseenter
//card.addEventListener('mouseenter', runEvent);

// Mouseleave
//card.addEventListener('mouseleave', runEvent);

// Mouseover
//card.addEventListener('mouseover', runEvent);

// Mouseout
//card.addEventListener('mouseout', runEvent);

// Mousemove
//card.addEventListener('mousemove', runEvent);

// Event Handler // - a technical term reffers to the function I am passing to the event listener
/*function runEvent(e) {
    console.log(`Event Type: ${e.type}`);
  
    heading.textContent= `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
  
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
  }*/

const list = Array.from(document.querySelectorAll('.collection-item'));

list.forEach(function (item) {
    item.addEventListener('click', color)
    item.addEventListener('dblclick', color)
})

function color(event) {
    console.log(event.type)
    if (event.type == 'click') {
        Array.from(list).forEach(function (item) {
            item.style.backgroundColor = '';
        })
        event.target.style.backgroundColor = 'green';
    } else if (event.type == 'dbclick') {
        event.target.style.backgroundColor = '';
    }
}