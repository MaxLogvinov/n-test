import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  //   designers: designersSlice,
  //   issues: issuesSlice,
  //   theme: themeSlice,
  //   comments: commentsSlice
});

export const store = configureStore({
  reducer: rootReducer
});

// Тип для корневого состояния
export type RootState = ReturnType<typeof store.getState>;

// Тип для диспетчера
export type AppDispatch = typeof store.dispatch;
