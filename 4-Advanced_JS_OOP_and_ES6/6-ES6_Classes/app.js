//Class basic syntax for declaration 'die Erklärung'
//class is an advance function

class User {
    //we should start with constructor
    constructor(userName, passWord) {
        this.name = userName;
        this.pass = passWord
    }
    //we write the properties inside of the constructor
    //but we write the methods outside of the constructor
    changePass(newPass) {
        this.pass = newPass
    }
}

//the Usage (die Verwendung)
let u1 = new User('Kumaro', '1234')
console.log(u1)

//////////////////////////////////////////////////////
class Person {
    constructor(firstName, lastName, dateBirth) {
        this.name1 = firstName;
        this.name2 = lastName;
        this.date = new Date(dateBirth)
    }

    greeting(hello) {
        return `Hi ${this.name1} ${this.name2}`
    }

    calcAge() {
        const diff = Date.now() - this.date.getTime()
        const ageDate = new Date(diff)
        return Math.abs(ageDate.getUTCFullYear() - 1970)
    }

    getsMarried(newLastName){
        this.name2 = newLastName
        
    }
}

let u2 = new Person('Maja', 'Maksic', '07-26-1985')
u2.getsMarried('Espina')
console.log(u2.calcAge())
console.log(u2.greeting())
console.log(typeof Person)

///////////////////////////////////////////////////
class Book {
    constructor(title, author, price){
        this.title = title;
        this.author = author;
        this.price = price
    }

    changePrice(newPrice){
    this.price = newPrice
    }
}

let b1= new Book('Hello World', 'Filiz', '25euros')
b1.changePrice('35euros')
console.log(b1)

/////////////////////////////////////////////////////
//another way to start the class
//function sum(){}
//let sum = function (){}

const Book1 = class{
    constructor(title, author, price){
        this.title = title;
        this.author = author;
        this.price = price
    }

    changePrice(newPrice){
        this.price = newPrice
    }
}

let b2 = new Book1('JS','Filiz', 35)
b2.changePrice(55)
console.log(b2)
//////////////////////////////////////////////////
//give price
const Book3 = class{
    constructor(title, author){
        this.title = title;
        this.author = author;
    }

    givePrice(price){
        this.price = price
    }
}

let b3 = new Book3('JS','Filiz')
b3.givePrice(65)
console.log(b3.price)