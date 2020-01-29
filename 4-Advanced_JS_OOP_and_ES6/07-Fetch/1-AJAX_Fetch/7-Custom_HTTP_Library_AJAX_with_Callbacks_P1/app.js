const http = new easyHTTp;
function success(items){
    console.log(items)
}

function errFunction(){
    console.log(err)
}
//Get Posts
http.get("https://jsonplaceholder.typicode.com/posts", success, errFunction)
