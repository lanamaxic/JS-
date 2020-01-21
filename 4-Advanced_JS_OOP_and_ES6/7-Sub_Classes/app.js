// class Person {
//     constructor(firstName, lastName) {
//         this.name1 = firstName;
//         this.name2 = lastName;
//     }

//     greeting(hello) {
//         return `Hi ${this.name1} ${this.name2}`
//     }
// }

// class Customer extends Person {
//     constructor(cFirstName, cLastName, phone, membership){
//         super(cFirstName, cLastName)
//         this.phone = phone
//         this.membership = membership
//     }

//     giveMembershipCost(cost){
//         this.memcost = cost
//     }
// }

// let c1 = new Customer('Harris', 'Riazh', '555-5555', 'standard')
// console.log(c1)
// console.log(c1.greeting())
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

class Magazin extends Book {
    constructor(title, author, price, mYear){
        super(title, author, price)
        this.year = mYear
    }

    showYear() {
        return this.year
    }
}

let m1 = new Magazin('Hello World', 'Filiz', 25, 1991)
m1.changePrice(55)
console.log(m1.price)
////////////////////////////////////
//EXERCISE
//write a class for property, property has 2 properties, location(string) and size(number)
//write a subclass of property, name: Flat, has extra property(owner), price per square meter
//write a method calculate price
//subclass of flat: clinic, extra properties, types(array), doctors(array of people)
//write a class : person (no extension), properties, firstname, lastname
//write a class: doctor class: specialization, experience

class Property {
    constructor(location, size) {
        this.location = location;
        this.size = size
    }
}

class Flat extends Property{
    constructor(location, size, owner, price){
        super(location, size)
        this.owner = owner;
        this.price = price
    }

    calcPrice(){
        return this.size * this.price
    }
}

let p1 = new Flat('Hamburg', 46, 'Lana', 30)
// p1.calcPrice(40)
console.log(p1.calcPrice())

class Clinic extends Flat{
    constructor (location, size, owner, price, types, doctors){
        super(location, size, owner, price)
        this.types = types
        this.doctors = doctors
    }

}
 
class Person {
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
}

class Doctor extends Person{
    constructor(firstName, lastName,specialization, experience){
        super(firstName, lastName)
        this.specialization = specialization
        this.experience = experience
    }
    
}

let owner = new Person ('Maja', 'Maksic')
let d1 = new Doctor('Maja', 'maksic', 'mental', 'advanced')
let d2 = new Doctor('Maja', 'maksic', 'mental', 'advanced')
let d3 = new Doctor('Maja', 'maksic', 'mental', 'advanced')
let d4 = new Doctor('Maja', 'maksic', 'mental', 'advanced')

let arrayOfDoc = [d1,d2,d3,d4]

let clinic = new Clinic (('Hammerbrook',625,owner,1000,['Mental'], arrayOfDoc))
console.log(clinic)