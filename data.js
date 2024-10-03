let BIN_ID = "66fe4a0be41b4d34e43c2f4d ";
let BIN_API_URL = "https://api.jsonbin.io/v3";

async function loadData() {
    let response = await axios.get(`${BASE_API_URL}/b/${BIN_ID}/latest`);
    return response.data.record;
}


async function saveData(books) {
    let response = await axios.put(`${BASE_API_URL}/b/${BIN_ID}`, tasks);
    return response.data;

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

function updateAvailability(bookList, isbn) {
    let index = bookList.findIndex((b) => {
        return b.id == isbn
    });

    bookList[index].avail = !bookList[index].avail;
}