document.getElementById('button1').addEventListener('click', getText)
document.getElementById('button2').addEventListener('click', getJson)
document.getElementById('button3').addEventListener('click', getApi)

//Fetch is a build-in predefined function to do the same thing like ajax, but is faster, new generation,
//build-in with any browser, very advanced

//Get local text file data
function getText() {
    fetch('local.txt')
        .then(function (res) {
            return res.text()
        })
        .then(function (data) {
            console.log(data)
            document.getElementById('output').innerHTML = data
        })

    //The PromiseStatus will stay "resolved" even if there is and Error because we are getting from LOCAL data file, 
    //only SERVER can change automatically the PromiseStatus into "rejected" when there is an Error

    // .catch(function(err){
    //     console.log(err)
    // })
}

//Get local JSON file data
function getJson() {
    fetch('local.json')
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            // console.log(data)
            // data = JSON.parse(data)
            let output = ""
            data.forEach(item => {
                output += `
                <li>${item.title}</li>`
            })
            document.getElementById('output').innerHTML = output
        })

    // .catch(function(err){
    //     console.log(err)
    // })
}

//Get Data from API


function getApi() {
    fetch('https://api.github.com/users')
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            // console.log(data)
            // data = JSON.parse(data)
            let output = ""
            data.forEach(item => {
                output += `
                <li>${item.login}</li>`
            })
            document.getElementById('output').innerHTML = output
        })
    //Only Server can change the Promise status into rejected
    .catch(function(err){
        console.log(err)
    })
}
