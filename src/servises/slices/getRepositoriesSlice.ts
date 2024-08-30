import { createSlice } from '@reduxjs/toolkit';
import { getRepositories } from '../thunks/getRepositories';

const initialGithubState = {
  repositories: [],
  status: 'idle',
  error: null
};

const githubSlice = createSlice({
  name: 'github',
  initialState: initialGithubState,
  reducers: {},
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

export default githubSlice.reducer;
