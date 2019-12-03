const btnTry = document.getElementById('try');
btnTry.addEventListener('click', myFunction);

//defining the eventHandler
function myFunction(){
    let myNodeName = document.getElementById('myP').nodeName;
    document.getElementById('demo').innerText = myNodeName; //myNodeName is here a tagName
}