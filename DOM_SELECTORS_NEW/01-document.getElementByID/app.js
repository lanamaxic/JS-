//get the element

// let firstDiv = document.getElementById('fDiv');

// //make its background red
// firstDiv.style.background = 'red';
// firstDiv.style.color = "white";

//Also there is a GLOBAL VARIABLE named by ID that references the element:

//sDIV is a reference to DOM-ELEMENT with id='sDIV'

//sDiv.style.background = 'blue';
//sDiv.style.color = 'white';

//That's unless we declare a JS-VARIABLE with the same name, then it takes precendence:

//let sDiv = 5; // Now sDiv is 5, not a reference to <div id = 'sDiv'>

//console.log(sDiv)

//const tableRowStyle = document.getElementById('firstRow');
//const table = document.getElementById('tbl')

const body = document.querySelector('body');

const table = document.createElement('table');
body.appendChild(table);

table.style.backgroundColor = "blue";
table.style.width = "800px";
table.style.height = "150px";

for(i = 0; i < 12; i++) {
    if(i < 3){
        let tr = document.createElement('tr');
        table.appendChild(tr);
    }
    else if(i < 6 &&  i >= 3){
        let th = document.createElement('th');
        th.appendChild(document.createTextNode('header'));
        table.firstChild.appendChild(th);
        th.style.backgroundColor = "#ccc";
    }
    else if(i < 9 && i >=6){
        let td = document.createElement('td');
        td.appendChild(document.createTextNode('td-Data'));
        table.childNodes[1].appendChild(td);
        td.style.backgroundColor = "hotpink";
        td.style.textAlign = "center";
    }
    else if(i >=9){
        let td = document.createElement('td');
        td.appendChild(document.createTextNode('td-DataLast'));
        table.lastChild.appendChild(td);
        td.style.backgroundColor = "aqua";
        td.style.textAlign = "center";
    }
}

console.log(table);
/*
const thead = document.createElement('thead');
const tr = document.createElement('tr');
const th = document.createElement('th')
const tbody = document.createElement('tbody');
const td = document.createElement('td');

table.appendChild(thead);
thead.appendChild(tr);
tr.appendChild(th);
*/



/*
table.appendChild(tbody);
tbody.appendChild(tr);
tr.appendChild(td);
*/
/*
function addCell(tr, val) {
    let td = document.createElement('td');

    td.innerHTML = val;

    tr.appendChild(td)
  }


  function addRow(tbl, val_1, val_2, val_3) {
    let tr = document.createElement('tr');

    addCell(tr, val_1);
    addCell(tr, val_2);
    addCell(tr, val_3);

    tbl.appendChild(tr)
  }

  function main() {
    tbl = document.getElementById('tbl');

    addRow(tbl, 'foo', 'bar', 'baz');
    addRow(tbl, 'one', 'two', 'three');
  }
*/


/*
firstRow.style.backgroundColor = "purple";
firstRow.style.color = "white";
secondRow.style.background ="blue";
secondRow.style.color = "white";
thirdRow.style.background ="aqua";
thirdRow.style.color = "white";
*/