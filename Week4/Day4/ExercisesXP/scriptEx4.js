const allBooks = [
    {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        image: 'https://example.com/mockingbird.jpg',
        alreadyRead: true
    },
    {
        title: '1984',
        author: 'George Orwell',
        image: 'https://example.com/1984.jpg',
        alreadyRead: false
    }
];

// Select the div with the class "listBooks"
const listBooksDiv = document.querySelector('.listBooks');

// Create a table element
const table = document.createElement('table');

// Loop through the books and create table rows
allBooks.forEach(book => {
    // Create a table row
    const tr = document.createElement('tr');

    // Create a cell for the book's title and author
    const titleAuthorTd = document.createElement('td');
    titleAuthorTd.textContent = `${book.title} written by ${book.author}`;
    if (book.alreadyRead) {
        titleAuthorTd.style.color = 'red';
    }
    tr.appendChild(titleAuthorTd);

    // Create a cell for the book's image
    const imgTd = document.createElement('td');
    const img = document.createElement('img');
    img.src = book.image;
    img.style.width = '100px';
    imgTd.appendChild(img);
    tr.appendChild(imgTd);

    // Append the row to the table
    table.appendChild(tr);
});

// Append the table to the div
listBooksDiv.appendChild(table);