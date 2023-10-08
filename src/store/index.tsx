import {configureStore} from '@reduxjs/toolkit';
import questionSlice from './questions/questionSlice';
import categorySlice from './categories/categorySlice';
import navigateSlice from './navigate/navigateSlice';

export const store = configureStore({
  reducer: {
    questions: questionSlice,
    categories: categorySlice,
    navigate: navigateSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
