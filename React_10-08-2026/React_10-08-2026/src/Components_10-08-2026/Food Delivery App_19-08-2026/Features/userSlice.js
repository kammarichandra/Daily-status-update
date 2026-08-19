import { createSlice } from "@reduxjs/toolkit";

let userSlice = createSlice({
  name: "user",

  initialState: {
    addresses: [],
    favoriteRestaurants: []
  },

  reducers: {
    addAddress: (state, action) => {
      state.addresses.push(action.payload);
    },

    removeAddress: (state, action) => {
      state.addresses = state.addresses.filter(
        (_, index) => index !== action.payload
      );
    },

    addFavoriteRestaurant: (state, action) => {
      if (
        !state.favoriteRestaurants.includes(
          action.payload
        )
      ) {
        state.favoriteRestaurants.push(action.payload);
      }
    }
  }
});

export const {
  addAddress,
  removeAddress,
  addFavoriteRestaurant
} = userSlice.actions;

export default userSlice.reducer;