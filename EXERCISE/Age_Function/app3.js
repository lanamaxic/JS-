let guest1 = {
    name: 'Andri',
    age: 28
}

let guest2 = {
    name: 'Lana',
    age: 17
}

let guest3 = {
    name: 'Maja',
    age: 34
}

let guest4 = {
    name: 'Ruth',
    age: 33
}

let guest5 = {
    name: 'Marcos',
    age: 15
}


let people = [guest1, guest2, guest3, guest4, guest5]

function partyInvite(people) {
    let ul =document.getElementById('list')
    for (i = 0; i < people.length; i++) {
        if (people[i].age >= 18) {
            let li = document.createElement('li')
            li.textContent = `Hi , ${people[i].name} you are invited to the party`
            ul.appendChild(li)
            li.style.backgroundColor = 'gold'
            li.style.color = 'red'

           
        } else {
            let ul = document.getElementById('list2')
            let li = document.createElement('li')
            li.textContent = `Hi, ${people[i].name} you should try again when you are older!`
            ul.appendChild(li)
            li.style.backgroundColor = 'pink'
            li.style.color = 'blue'
          }
        }
    }

    partyInvite(people)

