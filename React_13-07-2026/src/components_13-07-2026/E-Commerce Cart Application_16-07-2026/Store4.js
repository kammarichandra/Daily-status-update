import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const Store4 = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default Store4;