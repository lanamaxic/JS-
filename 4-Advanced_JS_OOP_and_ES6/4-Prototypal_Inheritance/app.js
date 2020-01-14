//prototype is an invisible property of all objects that we create, it has typeof object
//it has some predefined methods like isPrototypeOf() and more
//we can use prototype to add extra properties after we finish our object or constructor definition.
//the extra added properties using prototype it will be added to all instances from that object

// let animal = {
//     eats : true
// }

// let rabbit = {
//     jumps : true
// }

//with constructor we use .prototype
//with object we use .__proto__

// console.log(animal)
// rabbit.__proto__ = animal
// rabbit.__proto__.ears = 2
// console.log(rabbit.ears)

//write a constructor
// function Animal(iEats) {
//     this.eats = iEats
// }

// let longEars = {
//     earLength: 10,
//     __proto__: rabbit
// }

// let anim1 = new Animal(true)
// console.log(longEars.eats)

//Task: Please write a user object 
//user has 2 properties : name & password
// write another object guest
// guest has 2 extra properties which are role and authorities
//implement inheritance

let user = {
    name: 'Fran',
    password: '1234Berlin',
    changePassword: function(newPass){
        this.pass = newPass
    }
}

let guest = {
    role: 'guest',
    authorities: ['read'],
    __proto__: user
}

//write admin object
//admin inherit guest
//admin has a function to add or delete authorities
//modifyAuths : function(addOrDel, item) {
    //check add or delete
    //if it is add
    //this.authorities.push(item)
    //if delete 
    //check if the item is not empty
    //search for the item and delete it
    //if the item is empty
    //delete the last index in the auth array
//}

let admin = {
    __proto__: guest,
    
    modifyAuths : function(addOrDel, item) {
        let add = [];
        for(let property in guest){
            if(guest.hasOwnProperty(property)){
                add.push(property)
            }
        }console.log(add);
    } 
    
}



// guest.changePassword('myEasyPass')
// console.log(guest.pass)

