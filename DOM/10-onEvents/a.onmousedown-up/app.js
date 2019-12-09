//onEvent = some javascript code 
const Bulb = document.getElementById('myimage')
//console.log(Bulb)

Bulb.onmousedown = lightOnOff
Bulb.onmouseup = lightOnOff
Bulb.onmouseover = lightOnOff
Bulb.onmouseout = lightOnOff


//Definition the Event Handlers
function lightoff(e){
    console.log(e.type)
    if(e.type =='mousedown' || e.type == 'mouseover')
    {e.target.src = 'bulboff.gif'}
    else {
        e.target.src = 'bulboff.gif'
    }
}

function lighton(){
    Bulb.src = 'bulbon.gif'
}

