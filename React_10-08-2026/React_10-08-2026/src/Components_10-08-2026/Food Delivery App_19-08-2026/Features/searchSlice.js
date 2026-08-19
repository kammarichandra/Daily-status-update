import { createSlice } from "@reduxjs/toolkit";

let searchSlice = createSlice({
  name: "search",

  initialState: {
    query: "",
    cuisine: "All",
    maxPrice: 1000
  },

  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },

    setCuisine: (state, action) => {
      state.cuisine = action.payload;
    },

    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },

    clearFilters: (state) => {
      state.query = "";
      state.cuisine = "All";
      state.maxPrice = 1000;
    }
  }
});

export const {
  setQuery,
  setCuisine,
  setMaxPrice,
  clearFilters
} = searchSlice.actions;

export default searchSlice.reducer;