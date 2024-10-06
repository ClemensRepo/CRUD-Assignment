let BIN_ID = "66ffa612acd3cb34a890f476";
let BASE_API_URL = "https://api.jsonbin.io/v3";

async function loadData() {
    let response = await axios.get(`${BASE_API_URL}/b/${BIN_ID}/latest`);
    console.log("loadData(): response.data.record: ", response.data.record);
    return response.data.record;
}


async function saveData(books) {

    let response = await axios.put(`${BASE_API_URL}/b/${BIN_ID}`, books);
    return response.data;
}

function addBook (books, newTitle, newAuthor, newIsbn, newLocation) {
    let newBook = {
        "title": newTitle,
        "author": newAuthor,
        "isbn": newIsbn,
        "location": newLocation   
    }
    books.push(newBook);
}

function editBook (bookList, isbn, newTitle, newAuthor, newLocation) {
    let index = bookList.findIndex((b) => {
        return b.isbn == isbn
    })
    if (index !== -1) {
        bookList[index] = {
            "title": newTitle,
            "author":newAuthor,
            "isbn": isbn,
            "location": newLocation 
        }
    }
}

function deleteBook (bookList, isbn) {
    let index = bookList.findIndex((b) => {
        return b.isbn == isbn
    })
    if (index !== -1) {
    bookList.splice(index, 1);
    }
}

