import { configureStore } from "@reduxjs/toolkit";

import restaurantReducer from "../Features/restaurantSlice";

import foodReducer from "../Features/foodSlice";

import orderReducer from "../Features/orderSlice";

import searchReducer from "../Features/searchSlice";

import userReducer from "../Features/userSlice";

export let store = configureStore({
    
  reducer: {
    restaurants: restaurantReducer,
    foods: foodReducer,
    orders: orderReducer,
    search: searchReducer,
    user: userReducer
  }
});