let BIN_ID = "66fe4a0be41b4d34e43c2f4d";
let BASE_API_URL = "https://api.jsonbin.io/v3";

async function loadData() {
    let response = await axios.get(`${BASE_API_URL}/b/${BIN_ID}/latest`);
    console.log("response.data.record", response.data.record);
    return response.data.record;
}


async function saveData(books) {
    let response = await axios.put(`${BASE_API_URL}/b/${BIN_ID}`, books);
    console.log("response.data", response.data.record);
    return response.data;
}

function addBook (newTitle, newAuthor, newIsbn, availability) {
    let newBook = {
        "title": newTitle,
        "author": newAuthor,
        "isbn": newIsbn,
        "availability": availability   
    }
    books.push(newBook);
}

function editBook (bookList, isbn, newTitle, newAuthor, availability) {
    let index = bookList.findIndex((b) => {
        return b.isbn = isbn
    })
    if (index) {
        bookList[index] = {
            "title": newTitle,
            "author":newAuthor,
            "id": isbn,
            "availability": availability 
        }
    }
}

function deleteBook (bookList, isbn) {
    let index = bookList.findIndex((b) => {
        return b.isbn == isbn
    })
    bookList.splice(index, 1);
}

function updateAvailability(bookList, isbn) {
    let index = bookList.findIndex((b) => {
        return b.isbn == isbn
    });

    bookList[index].avail = !bookList[index].avail;
}