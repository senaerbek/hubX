import {createSlice} from '@reduxjs/toolkit';

const navigateSlice = createSlice({
  name: 'navigate',
  initialState: {
    switchNavigationRoute: 'OnBoard',
  },
  reducers: {
    changeStackNavigation: (state, action) => {
      state.switchNavigationRoute = action.payload.switchNavigationRoute;
    },
  },
});

export const {changeStackNavigation} = navigateSlice.actions;
export default navigateSlice.reducer;
