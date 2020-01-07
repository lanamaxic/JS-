let guest1 = {
    name: 'Andri',
    food: 'Tortilla',
    checked : false
}

let guest2 = {
    name: 'Lana',
    food: 'Rabo de Torro',
    checked : false
}

let guest3 = {
    name: 'Maja',
    food: 'Pizza',
    checked : false
}

let people = [guest1,guest2, guest3]
let favorite = ['Tortilla', 'potato', 'egg']

function favoriteFood(people, favorite){
    let ul =document.getElementById('list')
    
    for(i=0; i < people.length; i++) {
       
        
        for(k=0; k < favorite.length; k++) {
            if(people[i].food == favorite[k]){
                let li = document.createElement('li')
                li.textContent = `Hello,${people[i].name} here you are ${favorite[k]}` 
                ul.appendChild(li)
                break;
                
            } else {
                let li = document.createElement('li')
                li.textContent = `Hello, ${people[i].name} we don't have  ${ people[i].food}` 
                ul.appendChild(li)
                break;
            }
        
    
    }
}
}
favoriteFood(people, favorite)