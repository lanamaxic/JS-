document.getElementById('button1').addEventListener('click', getText)
console.log(window.fetch)
//Fetch is a build-in predefined function to do the same thing like ajax, but is faster, new generation, build in with any browser, very advanced

//Get local text file data
function getText(){
fetch('local.txt')
.then()
.catch()
}