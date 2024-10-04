let books = [];

window.addEventListener("DOMContentLoaded", async () => {
    books = await loadData();
    console.log(books);

    function renderList() {
        display.innerHTML = "";
        console.log("loaded dada:",books);
        for (let b of books) {
            let liElement = document.createElement("li");
            liElement.innerHTML = `Book Title: ${b.title}  Author: ${b.author}  ISBN: ${b.isbn} Location: ${b.location}<button class="editBook" id="editBook" style="margin: 5px;">Edit</button><button class="deleteBook" id="deleteBook" style="margin: 5px;">Delete</button>`;
            

            liElement.querySelector(".editBook").addEventListener("click", () => {
                let isbn = prompt("Enter the ISBN of the book you want to edit");
                let newTitle = prompt("Enter the title of book");
                let newAuthor = prompt("Enter the name of author");
                let newLocation = prompt("Enter location of book");
                editBook(books, isbn, newTitle, newAuthor, newLocation);
                saveData(books);
                renderList();
            })

            liElement.querySelector("#deleteBook").addEventListener("click", () => {
                let toDelete = confirm("Do you really want to delete a book?");
                if (toDelete) {
                    deleteBook(books, isbn);
                    saveData(books);
                    renderList();
                }
            })
            

            // let radioButton = liElement.querySelector(".avail");
            // radioButton.checked = b.location;
            // radioButton.addEventListener("click", function () {
            //     updateLocation(books, b.id);
            //     saveData(books);
            //     renderList();
            // })
            display.append(liElement);
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
        let location = document.querySelector(".location:checked").value;

        addBook(books, newTitle, newAuthor, newIsbn, location);
        saveData(books);
        renderList();
    })

    document.querySelector("#save-btn").addEventListener("click", () => {
        saveData(books);
    })

})