import {createAsyncThunk} from '@reduxjs/toolkit';
import {baseUrl} from '../index';

export const getCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const response = await fetch(`${baseUrl}/getCategories`);
    return await response.json();
  },
);
