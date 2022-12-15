import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice.js";
import modalReducer from "./features/modal/modalSlice.js";
import likedReducer from "./features/liked/likedSlice.js";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
    like: likedReducer,
  },
});

export default store;
