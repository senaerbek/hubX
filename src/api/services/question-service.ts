import {createAsyncThunk} from '@reduxjs/toolkit';
import {baseUrl} from '../index';

export const getQuestions = createAsyncThunk(
  'questions/fetchQuestions',
  async () => {
    const response = await fetch(`${baseUrl}/getQuestions`);
    return await response.json();
  },
);
