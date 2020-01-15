let animal = {
    eats: true,
    doesEat : function() {
        return this.eats
    }
}
//create a new object using Object.create, adding properties first way
// let rabbit = Object.create(animal, {
//     longEars: {value: 2},
//     jumps: {value: true}})

//adding properties second way
let rabbit = Object.create(animal)
rabbit.longEars = 2
rabbit.jumps = true
console.log(rabbit)

//Recreate our person object
const persoProtos = {
    firstName: 'Farrah',
    lastName: 'Yousef',
    age: 25,
    maritalStatus : 'single',
    greetings : function(){
 return `Hello Mrs ${this.firstName}
 ${this.lastName}`
    },
    getsMarried : function(newLastName){
        this.lastName = newLastName
    }
}

const person = Object.create(persoProtos)

    person.firstName = 'Farrah';
    person.lastName = 'Yousef';
    person.age = 25;
    person.maritalStatus = 'single';

console.log(person)




//guest and user object
const userProto = {
   
    changePass : function(newPass){
       return `${this.newPass}`
    },
    changeAuth : function(newAuth){
        return `${this.auths}`
    }
}

const user = Object.create(userProto)
user.role = 'guest'
user.name = 'Filiz'
user.auths = ['read', 'eat', 'sleep']
console.log(user)