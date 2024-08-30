import { createSlice } from '@reduxjs/toolkit';
import { getRepositories } from '../thunks/getRepositories';
import { PayloadAction } from '@reduxjs/toolkit';

interface GithubState {
  repositories: Repository[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  isSearchStarted: boolean;
}

const initialGithubState: GithubState = {
  repositories: [],
  status: 'idle',
  error: null,
  isSearchStarted: false
};

const githubSlice = createSlice({
  name: 'github',
  initialState: initialGithubState,
  reducers: {
    setIsSearchStarted: (state, action: PayloadAction<boolean>) => {
      state.isSearchStarted = action.payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getRepositories.pending, state => {
        state.status = 'loading';
      })
      .addCase(getRepositories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        console.log(action.payload);
        state.repositories = action.payload;
      })
      .addCase(getRepositories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { setIsSearchStarted } = githubSlice.actions;
export default githubSlice.reducer;
