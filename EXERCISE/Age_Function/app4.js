let people = [{
    name: 'Andri',
    HTML: 60,
    CSS: 100,
    JS: 70
}, {
    name: 'Phillip',
    HTML: 80,
    CSS: 40,
    JS: 90
}, {
    name: 'Lana',
    HTML: 20,
    CSS: 70,
    JS: 30
}, {
    name: 'Ruth',
    HTML: 30,
    CSS: 70,
    JS: 90
}, {
    name: 'Safwan',
    HTML: 40,
    CSS: 50,
    JS: 35
}, {
    name: 'Jay',
    HTML: 70,
    CSS: 30,
    JS: 100
}, {
    name: 'Stefan',
    HTML: 60,
    CSS: 100,
    JS: 70
}, {
    name: 'Javier',
    HTML: 35,
    CSS: 40,
    JS: 10
}, {
    name: 'Clemens',
    HTML: 70,
    CSS: 80,
    JS: 70
}, {
    name: 'Filiz',
    HTML: 90,
    CSS: 90,
    JS: 60
}]

function DCICourse(people){
   
    for (i = 0; i < people.length; i++){
        if (people[i].HTML >= 50 && people[i].CSS >= 50 && people[i].JS >= 50) {
            let ul = document.getElementById('Passed')
            let li = document.createElement('li')
            li.textContent = `${people[i].name} passed every subject of the course!`
            ul.appendChild(li)
            li.style.backgroundColor = 'gold'
            li.style.color = 'red'
        } else if (people[i].HTML >= 50 && people[i].CSS >= 50 && people[i].JS < 50) {
            let ul = document.getElementById('Passed')
            let li = document.createElement('li')
            li.textContent = `${people[i].name} passed the year but work on your JavaScript!`
            ul.appendChild(li)
            li.style.backgroundColor = 'gold' 
            li.style.color = 'red'
        } else if (people[i].HTML < 50 && people[i].CSS >= 50 && people[i].JS >= 50) {
            let ul = document.getElementById('Passed')
            let li = document.createElement('li')
            li.textContent = `${people[i].name} passed the year but work on your HTML!`
            ul.appendChild(li)
            li.style.backgroundColor = 'gold'
            li.style.color = 'red'
        } else if (people[i].HTML >= 50 && people[i].CSS < 50 && people[i].JS >= 50) {
            let ul = document.getElementById('Passed')
            let li = document.createElement('li')
            li.textContent = `${people[i].name} passed the year but work on your CSS!`
            ul.appendChild(li)
            li.style.backgroundColor = 'gold'
            li.style.color = 'red'
        } else if (people[i].HTML < 50 && people[i].CSS < 50 && people[i].JS < 50) {
            let ul = document.getElementById('Failed')
            let li = document.createElement('li')
            li.textContent = `${people[i].name} unfortunately didn't passed the year and work on every subject!`
            ul.appendChild(li)
            li.style.backgroundColor = 'pink'
            li.style.color = 'blue'
        } else if (people[i].HTML >= 50 && people[i].CSS < 50 && people[i].JS < 50) {
            let ul = document.getElementById('Failed')
            let li = document.createElement('li')
            li.textContent = `${people[i].name} unfortunately didn't passed the year and work on CSS and JavaScript!`
            ul.appendChild(li)
            li.style.backgroundColor = 'pink'
            li.style.color = 'blue'
        } else if(people[i].HTML < 50 && people[i].CSS >= 50 && people[i].JS < 50) {
            let ul = document.getElementById('Failed')
            let li = document.createElement('li')
            li.textContent = `${people[i].name} unfortunately didn't passed the year and work on HTML and JavaScript!`
            ul.appendChild(li)
            li.style.backgroundColor = 'pink'
            li.style.color = 'blue'
        } else if (people[i].HTML < 50 && people[i].CSS < 50 && people[i].JS >= 50) {
            let ul = document.getElementById('Failed')
            let li = document.createElement('li')
            li.textContent = `${people[i].name} unfortunately didn't passed the year and work on HTML and CSS!`
            ul.appendChild(li)
            li.style.backgroundColor = 'pink'
            li.style.color = 'blue'
        }
       }
    }
DCICourse(people)