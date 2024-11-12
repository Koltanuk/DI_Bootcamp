import React from 'react';

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img src={book.image} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>Published: {book.publishedYear}</p>
    </div>
  );
};

export default BookCard;