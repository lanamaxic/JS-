let days = [
    {
        name: 'Monday',
        shift1: 'Reserved',
        shift2: 'Free'
    },
    {
        name: 'Tuesday',
        shift1: 'Reserved',
        shift2: 'Reserved'
    },
    {
        name: 'Wednesday',
        shift1: 'Free',
        shift2: 'Free'
    },
    {
        name: 'Thursday',
        shift1: 'Free',
        shift2: 'Reserved'
    },
    {
        name: 'Friday',
        shift1: 'Reserved',
        shift2: 'Reserved'
    }
]

function appointment(days){
    for(i=0; i < days.length; i++){
    const table = document.createElement('table')
  table.setAttribute('id', 'myTable')
  document.body.appendChild(table) 

  const tr = document.createElement('tr')
  tr.setAttribute('id', 'myTr')
  document.getElementById('myTable').appendChild(tr)

  const td = document.createElement('td')
  document.getElementById('myTr').appendChild(td)
 
    }
  
  

}

appointment(days)

