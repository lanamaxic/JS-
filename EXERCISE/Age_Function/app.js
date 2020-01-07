//Getting years by dividing by 365 days leaves out leap years. 
//So you could divide by 365.25 but then you may still be off by one day. 
//The below solution solves that problem:

// function calculateAge(birthDate) {
//     let now = new Date();
//     let currentYear = now.getFullYear();
//     let birthYear = birthDate.getFullYear();
//     let age = currentYear - birthYear;
//     if (now < new Date(birthDate.setFullYear(currentYear))) {
//       age = age - 1;
//     }
//     return age;
//   }
//   console.log(calculateAge(new Date(1991, 10, 3))); 


// //another way
// function calculate_age (data) {
//     let now = new Date();
//     let age = now - data;
//     age = Math.floor(age/1000/60/60/24/365);
//     return age;
//     };
    
//     console.log(calculate_age(new Date(1982, 11, 4)));

//object with name, gender and age. If he is over 18(mister), under 18(sweetie)

let object1 = {
    name: 'Andri',
    gender: 'man',
    age: 28
}

let object2 = {
    name: 'Filiz',
    gender: 'woman',
    age: 16
}


let list= [object1, object2]

function compareAge(person){
    if (person.age > 18){
        return `Mr. ` + person.name 
    } 
        return `Sweetie ` + person.name
    
}

console.log(compareAge(object1))
console.log(compareAge(object2))
