import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Repository } from '../../utils/types';

const GITHUB_API_URL = 'https://api.github.com/search/repositories';

export const getRepositories = createAsyncThunk<
  { items: Repository[]; total_count: number },
  { query: string; perPage: number; page: number }
>('getRepositories', async ({ query, perPage, page }) => {
  const response = await axios.get(`${GITHUB_API_URL}?q=${query}&per_page=${perPage}&page=${page}`);
  return { items: response.data.items, total_count: response.data.total_count };
});
