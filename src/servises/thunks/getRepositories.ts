import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/search/repositories';

interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string;
  // Добавьте другие поля, если они есть
}

export const getRepositories = createAsyncThunk<Repository[], string>(
  'getRepositories',
  async query => {
    const response = await axios.get(`${GITHUB_API_URL}?q=${query}`);
    return response.data.items;
  }
);
