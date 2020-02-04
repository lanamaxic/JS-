// let x = JSON.parse(`{"id":0, "name": "Mostafa"}`);
// console.log(x.name)

// let y = {
//     name: "object", 
//     age: 21
// }

// let z = JSON.stringify(y)
// console.log(z.name)

// window.onload = function(){
//     // let div = document.getElementById("someDiv")
//     // div.innerHTML = "sdfsh"

// }

let div = document.createElement("div")

function showUsers() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "users.json", true);
    xhr.send();
    xhr.onprogress = function () {
        let p = document.createElement("p")
        p.id = "status"
        p.innerHTML = "Processing..."
        document.body.appendChild(div)
    }
    xhr.onreadystatechange = function () {
        // if(this.readyState == 0){
        //     p.innerHTML = "Request not initialized"
        // }
        // else if(this.readyState == 1)
        switch (this.readyState) {
            case 0:
                div.innerHTML = "Request not initialized"
                break;
            case 1:
                div.innerHTML = "connection established"
                break;
            case 2:
                div.innerHTML = "Request received"
                break;
            case 3:
                div.innerHTML = "Processing request"
                break;
            case 4:
                let response = JSON.parse(this.responseText)
                response.forEach(function (item) {
                    let p1 = document.createElement("p")
                    p.innerHTML = `Name: ${item.name} Phone: ${item.phone} Email: ${item.email}`
                    div.innerHTML = "Processing..."
                    div.append(p)
                })
                break;
            default:
                p.innerHTML = "Request not initialized"

        }



    }
}