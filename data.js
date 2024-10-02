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
        liElement.innerHTML = `Book Title: ${b.title}  Author: ${b.author}  ISBN: ${b.isbn} Availability: <input type="radio" class="avail" name="avail" value="true"/><label>Yes</label><input type="radio" class="avail" name="avail" value="false"/><label>No</label><button class="editBook">Edit</button><button class="deleteBook">Delete</button>`;
        display.append(liElement);
    }
}

function addBook (newTitle, newAuthor, newIsbn) {
    let newBook = {
        "title": newTitle,
        "author": newAuthor,
        "isbn": newIsbn    
    }
    books.push(newBook);
}

function editBook (bookList, isbn, newTitle, newAuthor) {
    let index = bookList.findIndex((b) => {
        return b.id = isbn
    })
    if (index) {
        bookList[index] = {
            "title": newTitle,
            "author":newAuthor,
            "id": isbn

        }
    }
}

function deleteBook (bookList, isbn) {
    let index = bookList.findIndex((b) => {
        return b.id == isbn
    })
    bookList.splice(index, 1);
}