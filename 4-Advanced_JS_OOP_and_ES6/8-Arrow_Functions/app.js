//function sum(a, b){
// return a+b
//}
//const sum = function(a,b){
// return a+b
//}

// let sum = (a, b) => a+b
// let dublicate = n => n*2
// let pow = (x, n) => {
//    let result = x
//    if(n == 0) {
//        return 1
//    }
//    for(i=1; i<n; i++){
//        result*=x; // result = result * xc
//    }
//     return result
// }
// let sayHi = () => console.log('Hi') 
// sayHi()
// let res = sum(150, 2025)
// res = dublicate(8)
// res = pow(8,3)
// console.log(res)

// let sum = (operand1, operand2) => operand1 + operand2
// let multi = (operand1, operand2) => operand1 * operand2
// let multi = (operand1, operand2) => operand1 / operand2
// let multi = (operand1, operand2) => operand1 / operand2


//array.map() and returns only banana
let fruits = ['orange','apple', 'banana', 'kiwi', 'avocado']

console.log(fruits.map(item => item == 'banana' ? item : ''))
console.log(fruits.map(item => item.length))
console.log(fruits.map(fruit => {if(fruit == 'banana') return fruit}))

let people = ['Kumar','Harris', 'Asmmari', 'Navide', 'Jijish', 'Julia']
console.log(people.map(person => person == 'Julia' ? 'German Name' : 'Indian Name'))
