import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  type: " ",
  laptop: [],
  pc: [],
  sort: " ",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    setType: (state, { payload }) => {
      state.type = payload;
      console.log(state.type);
    },
    setLaptop: (state, { payload }) => {
      state.laptop = [...state.laptop, payload];
    },
    setPc: (state, { payload }) => {
      state.pc = [...state.pc, payload];
    },
    clearType: (state) => {
      state.type = " ";
    },
    // setSort: (state, { payload }) => {
    //   state.sort = payload;
    //   console.log(state.sort);
    // },
  },
});

export const { openModal, closeModal, setType, setLaptop, setPc, clearType } =
  modalSlice.actions;

export default modalSlice.reducer;
