// let p = new Promise(function(resolve, reject){
// let random = Math.floor(Math.random()*50)+1
//         if(random <= 35){
//            resolve('Stuff Worked!')
//        } else {
//            reject(Error('The number is too big'))
//        }
//     })

// p.then(function(result){
//     console.log(result)
// }, function(err){
//     console.log(err)
// })


//new task
function get(url){
    return new Promise(resolve, reject)
    let req = new XMLHttpRequest();
    req.open('GET', 'http://api.myjson.com/bins/11uh1e');
    req.onload = function(){
    if(req.status === 200){
        resolve(request)
    } else reject('reject')
}


    }





req.onerror = function(){
    reject(Error('Network error'))
};

req.send()

get('GET', 'http://api.myjson.com/bins/11uh1e', function (err)


