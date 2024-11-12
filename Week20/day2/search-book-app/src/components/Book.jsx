import React, { useState } from 'react';
import BookList from './BookList';

const Book = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
      const data = await response.json();
      const booksData = data.items.map((item) => ({
        id: item.id,
        title: item.volumeInfo.title,
        author: item.volumeInfo.authors ? item.volumeInfo.authors[0] : 'Unknown',
        publishedYear: item.volumeInfo.publishedDate ? item.volumeInfo.publishedDate.slice(0, 4) : 'N/A',
        image: item.volumeInfo.imageLinks?.thumbnail,
      }));
      setBooks(booksData);
    } catch (error) {
      console.error("Error fetching books: ", error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchBooks();
  };

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const sortedBooks = [...books].sort((a, b) => b.publishedYear - a.publishedYear);

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for books..."
          value={query}
          onChange={handleQueryChange}
        />
        <button type="submit">Search</button>
      </form>
      <BookList books={sortedBooks} />
    </div>
  );
};

export default Book;
