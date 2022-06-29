import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  term: '',
  page: 1,
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setTerm: (state, action) => {
      state.term = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
})

export const { setTerm, setPage } = searchSlice.actions;

export default searchSlice.reducer;