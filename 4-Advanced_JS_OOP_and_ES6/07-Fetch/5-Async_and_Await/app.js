/*
Async/await :

*/
//The word "async" before a function
//This means a function always returns a promise.
//Values are wrapped in a resolved promise automatically.
//Doesn't work with arrow functions

// async function sampleFunc(){
//     return Promise.resolve('Hello February')
// }

// console.log(sampleFunc())
// sampleFunc().then(val => console.log(val))
// head.innerHTML = sampleFunc().then(val => head.innerHTML = val)
//So, async ensures that the function returns a promise and wraps it's returned value into the resolved value

//Await:

//There's another keyword, await, that works only inside async functions.
//The keyword await makes JS wait until that promise settles and returns its result.

// async function myTest(){
//     let promise = new Promise((resolve, 
//         reject) => {
//             setTimeout(() => resolve("done!"),
//             2000)
//         });
//         let result = await promise;
//         alert(result); //"done!"
// }
// myTest()

//AWAIT literally makes JS wait until the promise get executed and then go with the result.

//That doesn't cost any CPU resources, because the engine can do other jobs in the meantime: execute other scripts, handle events, etc.

// async function myFunc(){
//     const promise = new Promise((resolve,           //Promise GET Data
//         reject) => {                        
//             setTimeout(()=> resolve("Hello Feb"),
//             2000)
//         });
//         const error = true;
//         if(!error){
//             const res = await promise; //wait until promise is resolved
//             return res
//         } else {
//             await Promise.reject(new Error("Something went wrong"))
//         }
// }
// myFunc()
// .then(val => console.log(val))
// .catch(err => console.log(err))

async function getUsers(){
    //await response of the fetch call
    const response = await fetch("https://api.github.com/users")
    //Only proceed once it's resolved 
    const data = await response.json()

    //Only proceed once the second promise is resolved
    return data
}

getUsers().then(users => console.log(users))