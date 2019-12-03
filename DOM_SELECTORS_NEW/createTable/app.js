function createTable(){
    //body reference
    const body = document.querySelector('body');

    //create elements <table> and <body>

    const tbl = document.createElement('table');
    const tblBody = document.createElement('tbody');
   // const styleRow =tr[0].style.backgroundColor = "violett";
    //cells creation

    //styling each parts --> rows and cells
    for(let i = 0; i < 3; i++){
        //table ROW creation
        const row = document.createElement('tr');
        //row.style.backgroundColor = "red";
        if(i % 2 == 0){
            row.style.backgroundColor = "turquoise";
        }else{
            row.style.backgroundColor = "blue";
        }
        for(let j = 0; j < 3; j++){
            //create elements <td> and textNode
            //make the text node as content of <td>
            //put <td> at the end of the table row
///////////////SELECTING cells ids bzw. IDs td

            if(i==0){
                const th = document.createElement('th');
                row.appendChild(th)
                const thText = document.createTextNode('Cell-Title')
                th.appendChild(thText)
            }else{
                const cell = document.createElement('td');
            cell.style.border = ('black');
            cell.style.width = ('200px');
            cell.style.height = ('50px');
            const cellText = document.createTextNode('cell is row'+i+' ,and column '+j);
            cell.id=(j+""+i);
            cell.appendChild(cellText);
            row.appendChild(cell);
            }
            
        //console.log(cell);
        }
        
        //row added to the end of table body
        tblBody.appendChild(row);
    console.log(row)
    //styling the elements
    
    }
    //append the <body> inside th <table>
    tbl.appendChild(tblBody);
    //put the table inside the body
    body.appendChild(tbl)
    //adding tbl border attribute
    tbl.setAttribute('border', '4')
console.log(tbl)
    //return tbl  
}
createTable()
const td22 = document.getElementById('22');
td22.style.backgroundColor = '#ccc';

const td11 = document.getElementById('11');
td11.style.backgroundColor = '#ccc';
td11.appendChild(document.createTextNode(''))

const td00 = document.getElementById('00');
td00.style.backgroundColor = '#ccc';
/*
const table = createTable()
console.log(table.children[0].children)
*/



//console.log(tbl)