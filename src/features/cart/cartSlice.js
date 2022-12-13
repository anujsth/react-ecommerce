import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.cartItems = [...state.cartItems, payload];
    },
    increase: (state, { payload }) => {
      const itemId = payload.id;
      const cartItem = state.cartItems.find((item) => {
        return item.id === itemId;
      });
      cartItem.amount += 1;
    },
    decrease: (state, { payload }) => {
      const itemId = payload.id;
      const cartItem = state.cartItems.find((item) => {
        return item.id === itemId;
      });
      cartItem.amount -= 1;
    },
    removeItem: (state, { payload }) => {
      state.cartItems = state.cartItems.filter((item) => {
        return item.id !== payload.id;
      });
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    calcTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export const {
  addToCart,
  increase,
  decrease,
  removeItem,
  clearCart,
  calcTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
