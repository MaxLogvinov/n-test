import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/search/repositories';

export const getRepositories = createAsyncThunk('getRepositories', async query => {
  const response = await axios.get(`${GITHUB_API_URL}?q=${query}`);
  return response.data.items;
});
