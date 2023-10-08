import {configureStore} from '@reduxjs/toolkit';
import questionSlice from './questions/questionSlice';

export const store = configureStore({
  reducer: {
    questions: questionSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
