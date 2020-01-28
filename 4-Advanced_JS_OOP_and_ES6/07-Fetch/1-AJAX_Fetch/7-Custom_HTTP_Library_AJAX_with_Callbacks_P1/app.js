const http = new easyHTTp;
function anyFunc(items){
    console.log(items)
}
//Get Posts
http.get("https://jsonplaceholder.typicode.com/posts", function(items){
    console.log(items)
})
