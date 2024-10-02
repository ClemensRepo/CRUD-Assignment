
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
