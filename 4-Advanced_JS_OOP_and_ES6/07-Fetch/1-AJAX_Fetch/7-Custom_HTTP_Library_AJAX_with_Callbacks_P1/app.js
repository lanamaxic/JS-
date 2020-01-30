const http =  new easyHTTP;
function callback(err, response){
    if(err){
        console.log(err) 
        const div = document.createElement('div')
        div.appendChild(document.createTextNode(err))
        document.body.appendChild(div)
    } else {
        console.log(response)
        response = JSON.parse(response)
        const ul = document.createElement('ul')
        for(key in response){
            const li = document.createElement('li')
            li.appendChild(document.createTextNode(`${key} : ${response[key]}`))
            ul.appendChild(li)
        }
    }
   
}

function errFunction(){
    console.log(err)
}

//Get Posts
// http.get("https://jsonplaceholder.typicode.com/posts", callback)


//Get Post
http.get("https://jsonplaceholder.typicode.com/posts/1", callback)