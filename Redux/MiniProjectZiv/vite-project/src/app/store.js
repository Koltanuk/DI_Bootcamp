import { configureStore, combineReducers } from 'redux';
import postsReducer from '../features/posts/postsSlice';
import authorsReducer from '../features/authors/authorsSlice';

const rootReducer = combineReducers({
  posts: postsReducer,
  authors: authorsReducer,
});

export default rootReducer;
