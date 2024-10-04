let books = [];

window.addEventListener("DOMContentLoaded", async () => {
    books = await loadData();
    console.log(books);

    function renderList() {
        display.innerHTML = "";
        console.log("loaded data:", books);
        for (let b of books) {
            let liElement = document.createElement("li");
            liElement.innerHTML = `Book Title: ${b.title}  Author: ${b.author}  ISBN: ${b.isbn} Location: ${b.location}<button class="editBook" style="margin: 5px;">Edit</button><button class="deleteBook" style="margin: 5px;">Delete</button>`;
            
            // Edit event listener
            liElement.querySelector(".editBook").addEventListener("click", () => {
                let newTitle = prompt("Enter the new title of the book", b.title);
                let newAuthor = prompt("Enter the new name of the author", b.author);
                let newLocation = prompt("Enter the new location of the book", b.location);
                editBook(books, b.isbn, newTitle, newAuthor, newLocation);
                saveData(books);
                renderList(); // Rerender the updated list
            });

            // Delete event listener
            liElement.querySelector(".deleteBook").addEventListener("click", () => {
                let toDelete = confirm(`Do you really want to delete the book "${b.title}"?`);
                if (toDelete) {
                    deleteBook(books, b.isbn);
                    saveData(books);
                    renderList(); // Rerender the updated list
                }
            });

            display.append(liElement);
        }
    }

    let display = document.querySelector("#display");
    document.querySelector("#viewAllBooks").addEventListener("click", () => {
        renderList();
    });

    document.querySelector("#clear").addEventListener("click", () => {
        document.querySelector("#title").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#isbn").value = "";
    });

    document.querySelector("#addNewBook").addEventListener("click", () => {
        let newTitle = document.querySelector("#title").value;
        let newAuthor = document.querySelector("#author").value;
        let newIsbn = document.querySelector("#isbn").value;
        let location = document.querySelector(".location:checked").value;

        addBook(books, newTitle, newAuthor, newIsbn, location);
        saveData(books);
        renderList(); // Rerender the updated list
    });

    document.querySelector("#save-btn").addEventListener("click", () => {
        saveData(books);
    });
});


