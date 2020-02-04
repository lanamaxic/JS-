//Destructuring Assignment

// let a, b, c;
// [a,b] = [100,200]
// console.log(a, b)

//Rest pattern
// [a,b, c, ...x] = [100,200,300, 500, 600, 700]

// ({a,b, ...c} = {a:100, b:200, d:400, e:500})

//Array Destructuring
const people = ['John', 'Jay', 'Jill']
const [person1, person2, person3] = people

//Parse array returned from function
function getPeople(){
    return ['John', 'Jay', 'Jill']
}

let person1, person2, person3;
[person1,person2,person3] = getPeople()

//Object Destructuring
const person = {
    name: 'JOhn Doe',
    age: 32,
    city: "Miami",
    gender: 'Male',
    sayHello: function(){
        console.log('Hello')
    }
}

//Old ES5
console.log(person1, person2, person3)