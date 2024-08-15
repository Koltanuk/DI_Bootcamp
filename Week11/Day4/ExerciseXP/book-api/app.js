const express = require('express');
const app = express();

app.use(express.json());

// Simulated database
const books = [
    { id: 1, title: 'Book One', author: 'Author One', publishedYear: 2000 },
    { id: 2, title: 'Book Two', author: 'Author Two', publishedYear: 2005 }
];

// GET /api/books: Get all books
app.get('/api/books', (req, res) => {
    res.json(books);
});

// GET /api/books/:bookId: Get a book by ID
app.get('/api/books/:bookId', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.bookId));
    if (!book) return res.status(404).send('Book not found');
    res.json(book);
});

// POST /api/books: Create a new book
app.post('/api/books', (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author,
        publishedYear: req.body.publishedYear
    };
    books.push(newBook);
    res.status(201).json(newBook);
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
