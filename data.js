let books = [{
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
}]

function renderList () {
    display.innerHTML = "";
    for (let b of books) {
        let liElement = document.createElement("li");
        liElement.innerHTML = `Book Title: ${b.title}  Author: ${b.author}  ISBN: ${b.isbn} <input type="checkbox" class="checkbox"/><button id="edit">Edit</button><button id="delete">Delete</button>`;
        display.append(liElement);
    }
}