let nails = ["rusty nail", "rusty nail", "bent nail", "clean nail"]
let planks = ["splintered plank", "straight plank", "bent plank"]

//items = ["rusty nail", "rusty nail", "bent nail", "clean nail","splintered plank", "straight plank", "bent plank" ]

function clean(item) {
  //your code
  const li = document.createElement('li')
  li.innerText = `I just cleaned a ${item}`
  document.body.lastChild.insertAdjacentElement('beforeBegin', li)

}


function groupAndClean(items, cleaningMethod, done) {
  for (i = 0; i < items.length; i++) {
    cleaningMethod(items[i])
  }
  done()
}

groupAndClean(nails.concat(planks), clean, function () {
  //your code
  let done = document.createElement('p')
    done.innerText = 'This was a hell of a work. thanks god its over!!!!!!'
    document.body.lastChild.insertAdjacentElement('beforeBegin', done)
    console.log(done)   
})


//////book and library//////
let book1 = {
  title: 'JavaScript',
  author: 'Brad Pitt'
}
let book2 = {
  title: 'JavaScript',
  author: 'Brad Pitt'
}
let library = [book1, book2]
function writeBook(author, title) {
  //your code
}
function showBooks() {
  //your code
}
function addBook(author, title, writeBook, showBooks) {
  let book = writeBook(author, title)
  showBooks()
}