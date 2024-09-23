import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAuthors = createAsyncThunk('authors/fetchAuthors', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data;
});

const authorsSlice = createSlice({
  name: 'authors',
  initialState: {
    authors: [],
    selectedAuthor: '',
  },
  reducers: {
    authorSelected: (state, action) => {
      state.selectedAuthor = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAuthors.fulfilled, (state, action) => {
      state.authors = action.payload;
    });
  }
});

export const { authorSelected } = authorsSlice.actions;
export default authorsSlice.reducer;
