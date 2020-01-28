function easyHTTp(){
    this.http = new XMLHttpRequest()
}


//Make an HTTP GET Request(better way)
// easyHTTP.prototype.get = function (url){
//     this.http.open('GET', url, true);
//     this.http.onload = () => { // ARROW functions is good here, 'cause .this keyword can't referr to arrow function;it refer to the normal function
//         if(this.http.status === 200){
//             console.log(this.http.responseText);
//         }
//     }
//     this.http.send();
// }

//Make an HTTP GET Request
easyHTTp.prototype.get = function(url, action){
    this.http.open('GET', url, true);
    let self = this
    this.http.onload = function() {
        if(self.http.status == 200){
        //    console.log(self.http.responseText)
        action(self.http.responseText)
        }
    }
    this.http.send();
}



//Make an HTTP POST Request
//Make an HTTP PUT Request
//Make an HTTP DELETE Request