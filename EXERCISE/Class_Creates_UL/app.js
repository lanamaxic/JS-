class List {
    constructor(item1, item2){
        this.item1 = item1
        this.item2 = item2
    }

    getItems = function(){
        return [this.item1, this.item2]
    }
}

function UI(){}
UI.prototype.addUlist = function(list){
    const ul = document.getElementById('ul')

   for(i=0; i<list.getItems().length; i++){
       console.log(ul)
       let li = document.createElement('li')
       li.innerHTML = list.getItems()[i]
       ul.appendChild(li)
   }
}

let ui = new UI;
let list = new List('Filiz', 'Fran')
ui.addUlist(list)
