import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  products: [
    {
      id: 1,
      name: "Laptop",
      price: 55000,
      category: "Electronics",
      image: "https://via.placeholder.com/200?text=Laptop",
    },
    {
      id: 2,
      name: "Smartphone",
      price: 25000,
      category: "Electronics",
      image: "https://via.placeholder.com/200?text=Phone",
    },
    {
      id: 3,
      name: "Headphones",
      price: 2500,
      category: "Accessories",
      image: "https://via.placeholder.com/200?text=Headphones",
    },
    {
      id: 4,
      name: "Keyboard",
      price: 1500,
      category: "Accessories",
      image: "https://via.placeholder.com/200?text=Keyboard",
    },
    {
      id: 5,
      name: "Watch",
      price: 4000,
      category: "Fashion",
      image: "https://via.placeholder.com/200?text=Watch",
    },
    {
      id: 6,
      name: "Shoes",
      price: 3000,
      category: "Fashion",
      image: "https://via.placeholder.com/200?text=Shoes",
    },
  ],

  searchTerm: "",
  selectedCategory: "All",
};

let productsSlice = createSlice({
  name: "products",
  initialState,

  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },

    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export let {
  setSearchTerm,
  setCategory,
} = productsSlice.actions;

export default productsSlice.reducer;