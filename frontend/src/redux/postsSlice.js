import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const res = await axios.get('/api/posts');
  return res.data;
});

export const addPost = createAsyncThunk('posts/addPost', async (post) => {
  const res = await axios.post('/api/posts', post);
  return res.data;
});

export const deletePost = createAsyncThunk('posts/deletePost', async (id) => {
  const res = await axios.delete(`/api/posts/${id}`);
  return res.data;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    list: [],
    filter: '',
  },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.list = state.list.filter(post => post.id !== action.payload.id);
      });
  },
});

export const { setFilter } = postsSlice.actions;
export default postsSlice.reducer;

