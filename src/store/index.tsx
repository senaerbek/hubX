import {configureStore} from '@reduxjs/toolkit';
import questionSlice from './questions/questionSlice';
import categorySlice from './categories/categorySlice';

export const store = configureStore({
  reducer: {
    questions: questionSlice,
    categories: categorySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
