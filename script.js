let books = [];

window.addEventListener("DOMContentLoaded", async () => {
    books = await loadData();
    console.log(books);

    function renderList() {
        display.innerHTML = "";
        for (let b of books) {
            let liElement = document.createElement("li");
            liElement.innerHTML = `Book Title: ${b.title}  Author: ${b.author}  ISBN: ${b.isbn} Availability: <input type="radio" class="avail" name="avail" value="true"/><label>Yes</label><input type="radio" class="avail" name="avail" value="false"/><label>No</label><button class="editBook" id="editBook" style="margin: 5px;">Edit</button><button class="deleteBook" id="deleteBook" style="margin: 5px;">Delete</button>`;
            display.append(liElement);

           
            let radioButton = liElement.querySelector(".avail");
            radioButton.checked = b.avail;
            radioButton.addEventListener("click", function () {
                updateAvailability(books, b.id);
                renderList();
            })
        }
    }

    let display = document.querySelector("#display");
    document.querySelector("#viewAllBooks").addEventListener("click", () => {
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
        let availability = document.querySelector(".avail:checked").value;

        addBook(newTitle, newAuthor, newIsbn, availability);
        renderList();
    })

    // document.querySelector("#editBook").addEventListener("click", () => {
    //     let isbn = prompt("Enter the ISBN of the book you want to edit");
    //     let newTitle = prompt("Enter the title of book");
    //     let newAuthor = prompt("Enter the name of author");

    //     editBook(books, isbn, newTitle, newAuthor);
    //     renderList();
    // })

    // document.querySelector("#deleteBook").addEventListener("click", () => {
    //      let toDelete = confirm("Do you really want to delete a book?");
    //      if (toDelete) {
    //     let isbn = prompt("Enter the ISBN of the book to delete");
    //     deleteBook(books, isbn);
    //     renderList();
            }     
    // })

    // document.querySelector("#save-btn").addEventListener("click", (books) => {
    //     saveData(books);
    // })

})