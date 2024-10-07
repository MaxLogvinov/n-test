import { createSlice } from '@reduxjs/toolkit';
import { getRepositories } from '../thunks/getRepositories';
import { PayloadAction } from '@reduxjs/toolkit';
import { Repository } from '../../utils/types';

interface GithubState {
  repositories: Repository[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  isSearchStarted: boolean;
  currentPage: number;
  perPage: number;
  total_count: number;
  query: string;
  sortField: string | null;
  sortDirection: 'asc' | 'desc';
}

const initialGithubState: GithubState = {
  repositories: [],
  status: 'idle',
  error: null,
  isSearchStarted: false,
  currentPage: 1,
  perPage: 10,
  total_count: 0,
  query: '',
  sortField: null,
  sortDirection: 'desc'
};

const githubSlice = createSlice({
  name: 'github',
  initialState: initialGithubState,
  reducers: {
    setIsSearchStarted: (state, action: PayloadAction<boolean>) => {
      state.isSearchStarted = action.payload;
    },
    setPerPage: (state, action: PayloadAction<number>) => {
      state.perPage = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setSortField: (state, action: PayloadAction<string>) => {
      state.sortField = action.payload;
      console.log(action.payload);
    },
    setSortDirection: (state, action: PayloadAction<'asc' | 'desc'>) => {
      state.sortDirection = action.payload;
      console.log(action.payload);
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getRepositories.pending, state => {
        state.status = 'loading';
      })
      .addCase(getRepositories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.repositories = action.payload.items;
        state.total_count = action.payload.total_count;
      })
      .addCase(getRepositories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Неизвестная ошибка';
      });
  }
});

export const {
  setIsSearchStarted,
  setPerPage,
  setCurrentPage,
  setQuery,
  setSortField,
  setSortDirection
} = githubSlice.actions;
export default githubSlice.reducer;
