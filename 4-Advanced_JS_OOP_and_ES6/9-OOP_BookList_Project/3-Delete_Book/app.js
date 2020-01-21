//Delete book
UI.prototype.deleteBook = function (target) {
    if (target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
}

//Event Listener for delete
document.getElementById('book-list').addEventListener('click', function (e) {
    //Init UI
    const ui = new UI()

    //Delete book
    ui.deleteBook(e.target);

    e.preventDefault()
})