//Book Constructor
function Book (title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI Constructor
function UI(){}

//Add book to list
UI.prototype.addBookToList = function(book){
   const list = document.getElementById('book-list')
   //create tr element
   const row = document.createElement('tr')
   //insert cols
   row.innerHTML= `
   <td> ${book.title}</td>
   <td> ${book.author}</td>
   <td> ${book.isbn}</td>
   <td> <a href= '#' class='delete'>X</a></td>`
   list.appendChild(row)
   
}

//Clear Fields
UI.prototype.clearFields = function(){
    document.getElementById("title").value = '';
    document.getElementById("author").value = '';
    document.getElementById("isbn").value = '';
}

//Event Listener for add book
document.getElementById('book-form').addEventListener('submit', function(e){
    //Get input values
    const title = document.getElementById("title").value
    const author = document.getElementById("author").value
    const isbn = document.getElementById("isbn").value

    //Initiate book
    const book = new Book(title, author, isbn)
    console.log(book)

    //Initiate UI
    const ui = new UI()

    //Add book to list
    ui.addBookToList(book)

    //Clear fields
    ui.clearFields();

    e.preventDefault();
})


