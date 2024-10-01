

let display = document.querySelector("#display");
document.querySelector("#viewAllBooks").addEventListener("click",() => {
    display.innerHTML = "";
    for (let b of books) {
        let liElement = document.createElement("li");
        liElement.innerHTML = `Book Title: ${b.title}  Author: ${b.author}  ISBN: ${b.isbn}`;
        display.append(liElement);
    }
})