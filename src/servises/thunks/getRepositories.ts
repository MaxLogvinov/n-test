import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Repository } from '../../utils/types';

const GITHUB_API_URL = 'https://api.github.com/search/repositories';

export const getRepositories = createAsyncThunk<
  { items: Repository[]; total_count: number },
  {
    query: string;
    perPage: number;
    page: number;
    sortField?: string | null;
    sortDirection?: 'asc' | 'desc';
  }
>('getRepositories', async ({ query, perPage, page, sortField, sortDirection }) => {
  let url = `${GITHUB_API_URL}?q=${query}&per_page=${perPage}&page=${page}`;

  // Изменяем поля сортировки на правильные значения
  if (sortField && sortDirection) {
    // Добавляем параметр сортировки только при наличии значений
    url += `&sort=${sortField}&order=${sortDirection}`;
  }

  console.log('Request URL:', url); // Для отладки
  const response = await axios.get(url);
  return response.data;
});
