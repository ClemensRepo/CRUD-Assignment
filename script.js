let books = [/*{

    "title": "Three little pigs",
    "author": "Disney",
    "isbn": 1
},
{
    "title": "Harry Potter",
    "author": "JK Rowling",
    "isbn": 2
},
{
    "title": "Snow White and Seven Dwarfs",
    "author": "Evil Witch",
    "isbn": 3
}*/]

window.addEventListener("DOMContentLoaded", () => {
    books = await loadData();
    console.log(books);

    function renderList () {
        display.innerHTML = "";
        for (let b of books) {
            let liElement = document.createElement("li");
            liElement.innerHTML = `Book Title: ${b.title}  Author: ${b.author}  ISBN: ${b.isbn} Availability: <input type="radio" class="avail" name="avail" value="true"/><label>Yes</label><input type="radio" class="avail" name="avail" value="false"/><label>No</label><button class="editBook">Edit</button><button class="deleteBook">Delete</button>`;
            display.append(liElement);

            let radioButton = liElement.querySelector(".avail");
            radioButton.checked = b.avail;
            radioButton.addEventListener("click", function(){
            updateAvailability(books, b.id);
            renderList();
            })
        }
    }

let display = document.querySelector("#display");
document.querySelector("#viewAllBooks").addEventListener("click",() => {
    renderList();

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
    
    editBook(books,isbn, newTitle, newAuthor);
    renderList();
})

document.querySelector("deleteBook").addEventListener("click", () => {
    let isbn = prompt("Enter the ISBN of the book to delete");
    
    deleteBook(books, isbn);
    renderList();
    })

})