document.getElementById('button').addEventListener('click', loadData)

//Event Handler
function loadData() {
    //Create XHR Request object
    const xhr = new XMLHttpRequest();

    //OPEN is a method from my XMLHttpRequest instance. 'GET' is predefined method.
    xhr.open('GET', 'data.txt', true);
    // console.log(this.responseText)

    //onload method (GET, PUT, ...)
    xhr.onload = function () {
        console.log('The HTTP Status', this.responseText)
        const output = document.getElementById('output')
        if (this.status === 200) {
            document.getElementById('output').innerHTML =
                `<h1> ${this.responseText}</h1>`
        }
    }

    xhr.onprogress = function () {
        //console.log('READYSTATE :', xhr.readyState)
        /*readyState VAlue
        0: request not initialied
        1: server connection established
        2: request received
        3: processing request
        4: request finished and response is ready
        */
    }
  

    xhr.onreadystatechange = function () {
        console.log('READYSTATE :',
            xhr.readyState)
            if(this.status === 200 && this.readyState === 4){
                console.log(this.responseText)
            }
    }
    xhr.send();

}

