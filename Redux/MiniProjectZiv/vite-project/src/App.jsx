import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import PostList from './components/PostList';
import AuthorFilter from './components/AuthorFilter';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <AuthorFilter />
        <PostList />
      </div>
    </Provider>
  );
};

export default App;

