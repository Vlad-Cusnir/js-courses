console.log('main.js loaded...');

const apiUrl = `https://demo-api.siit.ro/api`;
const display = document.querySelector('#display');
const authorsLink = document.querySelector('#authors-anchor');
const booksLink = document.querySelector('#books-anchor');


function displayAuthors(authors) {
    display.textContent = '';

    // console.log(authors); 
    const authorsList = document.createElement('ul');
    display.append(authorsList);

    for (let i = 0; i < authors.length; i++) {
        // console.log(`Should display autor ${authors[i].name}`);
        const authorListItem = document.createElement('li');
        authorListItem.textContent = authors[i].name;
        authorsList.append(authorListItem);
    }
}


function displayBooks(books) {
    display.textContent = '';

    // console.log(books); 
    const booksList = document.createElement('ul');
    display.append(booksList);

    for (let i = 0; i < books.length; i++) {
        // console.log(`Should display autor ${authors[i].name}`);
        const bookListItem = document.createElement('li');
        bookListItem.textContent = `${books[i].name} | ${books[i].publish_date}`;
        booksList.append(bookListItem);
    }
}


/**
 * main code
 */

// authors button click
authorsLink.addEventListener('click', function () {
    display.textContent = 'Loading authors...';

    // fetch the authors!
    fetch(`${apiUrl}/authors`)
        .then(function (response) {
            return response.json(); // Parse the response as JSON
        })
        .then(function (data) {
            displayAuthors(data)    // Handle the data you get from the response
        })
})

// books button click
booksLink.addEventListener('click', function () {
    display.textContent = 'Loading books...';

    // fetch the books!
    fetch(`${apiUrl}/books`)
        .then(function (response) {
            return response.json(); // Parse the response as JSON
        })
        .then(function (data) {
            displayBooks(data)    // Handle the data you get from the response
        })
})