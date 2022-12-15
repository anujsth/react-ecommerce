import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likedItems: [],
};

const likedSlice = createSlice({
  name: "liked",
  initialState,
  reducers: {
    liked: (state, { payload }) => {
      state.likedItems = [...state.likedItems, payload];
    },
  },
});

export const { liked } = likedSlice.actions;

export default likedSlice.reducer;
