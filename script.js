
window.addEventListener("DOMContentLoaded", () => {

let display = document.querySelector("#display");
document.querySelector("#viewAllBooks").addEventListener("click",() => {
    renderList();
    
})

document.querySelector("#clear").addEventListener("click", () => {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
})

document.querySelector("#addNewBook").addEventListener("click", () => {
    
    let newTitle = document.querySelector("#title").value;
    let newAuthor = document.querySelector("#author").value;
    let newIsbn = document.querySelector("#isbn").value;

    addBook(newTitle, newAuthor, newIsbn);
    renderList();
    })

})

document.querySelector(".editBook").addEventListener("click", () => {
    let isbn = prompt("Enter the ISBN of the book you want to edit");
    let newTitle = prompt("Enter the title of book");
    let newAuthor = prompt("Enter the name of author");
    
    editBook(books,newTitle, newAuthor, isbn);
    renderList();
})

document.querySelector("deleteBook").addEventListener("click", () =>{
    let isbn = prompt("Enter the ISBN of the book to delete");
    
    deleteBook(books, isbn);
    renderList();
})
