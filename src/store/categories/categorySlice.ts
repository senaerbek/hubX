import {createSlice} from '@reduxjs/toolkit';
import {Category} from '../../models/Category';
import {getCategories} from '../../api/services/category-service';

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categories: {} as Category,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getCategories.pending, state => {
      state.loading = true;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.loading = false;
    });
    builder.addCase(getCategories.rejected, state => {
      state.loading = false;
    });
  },
});

export default categorySlice.reducer;
