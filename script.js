

let display = document.querySelector("#display");
document.querySelector("#viewAllBooks").addEventListener("click",() => {
    renderList();
    
})

document.querySelector("#addNewBook").addEventListener("click", () => {
    
    let newTitle = document.querySelector("#title").value;
    let newAuthor = document.querySelector("#author").value;
    let newIsbn = document.querySelector("#isbn").value;

    addBook(newTitle, newAuthor, newIsbn);
    renderList();
})