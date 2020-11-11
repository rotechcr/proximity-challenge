import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'products',
  initialState: {
    addDialog: false,
    list: [],
  },
  reducers: {
    setList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { actions } = slice;

export default slice.reducer;
