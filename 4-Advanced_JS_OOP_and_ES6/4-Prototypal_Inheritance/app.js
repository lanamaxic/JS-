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

// let user = {
//     name: 'Fran',
//     password: '1234Berlin',
//     changePassword: function(newPass){
//         this.pass = newPass
//     }
// }

// let guest = {
//     role: 'guest',
//     authorities: ['read'],
//     __proto__: user
// }

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

// let admin = {
//     __proto__: guest,
    
//     modifyAuths : function(addOrDel, item) {
//         //addOrDel is boolean (true for add and false and delete)
//         if(addOrDel) {
//             if(item){
//                 this.authorities.push(item)
//             } else{
//                 console.log("we can't add empty item")
//             }
//         } else {
//          if(item){
//              let pos = 0
//              for (i = 0; i < this.authorities.length; i++) {
//                 if (this.authorities[i] == item) pos = i
//             }
//             if (pos > 0) this.authorities.splice(pos, 1)
//             else console.log('Sorry item does not exists')
//         } else {
//             this.authorities.pop()
//         }
//     }
// }
// }
// admin.modifyAuths(1, 'write')
// console.log(admin.authorities)
      
// guest.changePassword('myEasyPass')
// console.log(guest.pass)

/////////////////////////////////////////////////////////////

function Product(iName, iPrice){
    this.name = iName
    this.price = iPrice
    this.getPrice = function(){
        return this.price
    }
}

const p1 = new Product('MyPhone', 250)
console.log(p1)


function Food(fName, fPrice, iVegan){
    //this is how to make inheritance with the constructor
    Product.call(this, fName, fPrice) // like in object __proto__:Product, "this" is from the Food
    this.category = 'food';
    this.vegan = iVegan;
}

const p2 = new Food('salad', 3, true)
console.log(p2.getPrice())


function User(iName, iPass) {
    this.name = iName;
    this.pass = iPass;
}

const u1 = new User('username', '1234Berlin')
console.log(u1)

function Guest(iName, iPass, iRole, iAuto){
    User.call(this, iName, iPass)
    this.role = iRole;
    this.auto = iAuto
}

const g1 = new Guest('username', '1234Berlin','Guest', 'read')
console.log(g1)