import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthors, authorSelected } from '../features/authors/authorsSlice';

const AuthorFilter = () => {
  const dispatch = useDispatch();
  const authors = useSelector(state => state.authors.authors);
  const selectedAuthor = useSelector(state => state.authors.selectedAuthor);

  useEffect(() => {
    dispatch(fetchAuthors());
  }, [dispatch]);

  return (
    <select
      value={selectedAuthor}
      onChange={(e) => dispatch(authorSelected(e.target.value))}
    >
      <option value="">All Authors</option>
      {authors.map(author => (
        <option key={author.id} value={author.id}>
          {author.name}
        </option>
      ))}
    </select>
  );
};

export default AuthorFilter;
