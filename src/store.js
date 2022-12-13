import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice.js";
import modalReducer from "./features/modal/modalSlice.js";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});

export default store;
