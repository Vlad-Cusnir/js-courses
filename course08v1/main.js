console.log('main.js loaded...');
const apiUrl = `https://demo-api.siit.ro/api`;
const display = document.querySelector('#display');
const authorsLink = document.querySelector('#authors-anchor');
const booksLink = document.querySelector('#books-anchor'); // Added booksLink

function clearDisplay() {
    display.innerHTML = '';  // Clear the display area
}

function displayAuthors(authors) {
    const authorsList = document.createElement('ul');
    display.append(authorsList);
    for (let i = 0; i < authors.length; i++) {
        const authorListItem = document.createElement('li');
        authorListItem.textContent = authors[i].name;
        authorsList.append(authorListItem);
    }
}

function displayBooks(books) {
    const booksList = document.createElement('ul');
    display.append(booksList);
    for (let i = 0; i < books.length; i++) {
        const booksListItem = document.createElement('li');
        booksListItem.textContent = books[i].name;
        booksList.append(booksListItem);
    }
}

// main code
authorsLink.addEventListener('click', function () {
    clearDisplay();
    fetch(`${apiUrl}/authors`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            displayAuthors(data);
        });
});

booksLink.addEventListener('click', function () {
    clearDisplay();
    fetch(`${apiUrl}/books`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            displayBooks(data);
        });
});