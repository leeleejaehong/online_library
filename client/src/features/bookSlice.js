import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "books",
  initialState: [],
  reducers: {
    setBooks: (state, action) => action.payload,
  },
});

export const { setBooks } = bookSlice.actions;

export const selectBooks = (state) => state.books;

export default bookSlice.reducer;
