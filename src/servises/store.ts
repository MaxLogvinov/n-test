import { combineReducers, configureStore } from '@reduxjs/toolkit';
import githubReducer from '../servises/slices/getRepositoriesSlice';

const rootReducer = combineReducers({
  github: githubReducer
});

export const store = configureStore({
  reducer: rootReducer
});

// Тип для корневого состояния
export type RootState = ReturnType<typeof store.getState>;

// Тип для диспетчера
export type AppDispatch = typeof store.dispatch;
