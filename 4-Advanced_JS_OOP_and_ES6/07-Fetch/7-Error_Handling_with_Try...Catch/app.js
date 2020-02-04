const user = {email:"safwan@email.test"};

try {
console.log("Hello Jay")

//Make a Reference Error
//myFunction()
//Make a TypeError
//null.myMethod()
//Make a URIError
eval("Hello Lana")
if(!user.name){
    //throw "user has no name"
}

// console.log("Hello Clemens")
} catch(err) {
console.log(`UserError: ${err.message}`)
}finally{
    console.log("Finally runs regardless of the result...")
    console.log("Hello Clemens")
}

console.log("Program continues...")