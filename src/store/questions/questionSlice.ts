import {createSlice} from '@reduxjs/toolkit';
import {getQuestions} from '../../api/services/question-service';
import {Question} from '../../models/Question';

const questionSlice = createSlice({
  name: 'question',
  initialState: {
    questions: [] as Question[],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getQuestions.pending, state => {
      state.loading = true;
    });
    builder.addCase(getQuestions.fulfilled, (state, action) => {
      state.questions = action.payload;
      state.loading = false;
    });
    builder.addCase(getQuestions.rejected, state => {
      state.loading = false;
    });
  },
});

export default questionSlice.reducer;
