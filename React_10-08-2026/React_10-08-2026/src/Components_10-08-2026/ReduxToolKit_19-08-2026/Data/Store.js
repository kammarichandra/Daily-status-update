import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../Feature/CounterSlice";

const Store = configureStore({
  reducer: {
    counter: CounterReducer
  }
});

export default Store;