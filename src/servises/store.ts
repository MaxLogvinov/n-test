import { combineReducers, configureStore } from '@reduxjs/toolkit';
import githubReducer from '../servises/slices/getRepositoriesSlice';

const rootReducer = combineReducers({
  github: githubReducer
});

export const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
