  import { createSlice } from "@reduxjs/toolkit";

  import { Restaurants } from './../Data/Restaurants';

  let restaurantSlice = createSlice({

    name: "restaurants",

    initialState: {
      data: Restaurants,
      loading: false,
      error: null
    },

    reducers: {

      addRestaurant: (state, action) => {
        state.data.push(action.payload);
      }
    }
  });

  export let { addRestaurant } =
    restaurantSlice.actions;

  export default restaurantSlice.reducer;