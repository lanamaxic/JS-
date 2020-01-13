function Student(){
    this.name = 'Maria'
    this.gender = 'Female'
}


Student.prototype.age = 15
let studOne = new Student()
let studTwo = new Student()
console.log(studOne.age)
console.log(studTwo.age)
//Prototype is invisible property of an object
//It returns prototype object of a function to which it links to.