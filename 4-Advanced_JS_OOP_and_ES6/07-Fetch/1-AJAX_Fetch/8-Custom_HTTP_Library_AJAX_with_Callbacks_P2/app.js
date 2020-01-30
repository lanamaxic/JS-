const http =  new easyHTTP;
function callback(err, response){
    if(err){
        console.log(err) 
        const div = document.createElement('div')
        div.appendChild(document.createTextNode(err))
        document.body.appendChild(div)
    }else{
        console.log(response)
        let data = JSON.parse(response)
        const ul = document.createElement('ul')
        for(x in data){
            const li = document.createElement('li')
            li.appendChild(document.createTextNode(`${x} : ${data[x]}`))
            ul.appendChild(li)
        }
        document.body.appendChild(ul)
    }
    }


// function errFunction(){
//     console.log(err)
// }

//Get Posts
// http.get("https://jsonplaceholder.typicode.com/posts", callback)


//Get Post
// http.get("https://jsonplaceholder.typicode.com/posts/1", callback)

//Create Data (that I want to post)
const data = {
    title: 'custom title',
    body: 'custom body'
};

//Send Data
// http.post('https://jsonplaceholder.typicode.com/posts', data, callback)

//Update Post
http.put('https://jsonplaceholder.typicode.com/posts/1', data, callback)