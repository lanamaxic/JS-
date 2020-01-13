// let animal = {
//     kind : 'Cat',
//     sound : 'meou',
//     legs : 4,
//     tail: true,
//     numOfLegs : function(){
//         return this.legs
//     }
// }

// // console.log(animal.numOfLegs())
// console.log(animal['numOfLegs']())

// let bird = animal
// bird.legs = 5
// console.log(animal.numOfLegs())
// console.log(bird.numOfLegs())



//////////////////////////////////////////////
// const person = {
//     firstName: 'Merry',
//     lastName: 'Christmas',
//     birthdate: new Date('9-10-1994'),
//     calculateAge : function() {
//         const diff = Date.now() - this.birthdate.getTime()
//         //now (in ms) and getTime() (in ms)
//         //diff is the age in ms
//         const ageDate = new Date(diff)
//         //Date.now() returns ms starting from 1970
//         return Math.abs(ageDate.getUTCFullYear() - 1970)
//     }
// } 
// console.log(person['calculateAge']())
///////////////////////////////////////////////////

//Person Constructor - a constructor is a function to build up an object, always start with a capital letter
function Person(name){
    this.myName = name
}

const trainer1 = new Person ('Safwan')
// to call a constructor we need a new keyword
console.log(trainer1)
const trainer2 = new Person ('Stefan')
console.log(trainer2)
// const myDate = new Date('9-12-1996')
// console.log(myDate)


function Animal(kind,legs) {
 this.myAnimal = kind,
 this.itLegs = legs,
 numOfLegs = function(){
     return this.itLegs
 }
}

const animal = new Animal ('dog', 4)
console.log(animal)