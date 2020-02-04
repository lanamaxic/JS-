/*const arr = [1,2,3,4,5,9,57,99]
let max = arr[0];
for(i=1; i< arr.length; i++){
    if(arr[i] > max){
        max = arr[i]
    }
}
console.log(max);
*/
//max = Math.max(1,2,3,4,5,9,57,99)
//console.log(Math.max(1,2,3,4,5,9,57,99));
/////////////////////////reducing code with --> SPREAD OPERATOR with ...

//using REST in ARRAYs
let arr = [1,2,3,4,5,"str",9,57,99]
console.log(Math.max(...arr));
console.log(...arr)
function average(...numbers){
    let sum = 0
    for(let i = 0; i <numbers.length; i++){
        sum += numbers[i];
    }
    return sum / numbers.length;
}
let x = average(1,2,3,10,5,6);
console.log(x);
///using SPREAD in OBJECTs
let obj = {
    name: "Jay",
    age: 28
}

// let obj1 = {
//     ...obj
// }
// console.log(obj1)
let obj0 = {
    firstName: "Jay",
    age: 28
}
let obj1 = {
    secondName: "second name",
    gender: "male"
}
let obj2 = {...obj0, ...obj1, nationality:"german"}
console.log(obj2)

//DESTRUCTURING
let ar = [10, "First String",[5,6], "Second String", 50]
// let firstString = ar[1]
// let secondString = ar[2]
let [,firstString, ,secondString,] = ar;
let [firstNumber, , , lastNumber] = ar
console.log(firstString)
console.log(secondString)
console.log(firstNumber)
console.log(lastNumber)

//Destructuring in objects

const ob = {firstName: "Mostafa", lastName: "Othman", age: 50}
const {firstName, age} = ob;
console.log(firstName); // => Mostafa
console.log(age)

//Rest operators
const numbers = [1,2,3]
const [fnumber, ...rNumbers] = numbers
// console.log(fnumber)
console.log(fNumbers)
const [allElement] = document.querySelectorAll(".bla")

allElement.forEach(item=>{

})