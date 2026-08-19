import { createSlice } from "@reduxjs/toolkit";

import { Foods } from './../Data/Foods';

let foodSlice = createSlice({
  name: "foods",

  initialState: {
    
    data: Foods,
    loading: false,
    error: null
  },

  reducers: {

    addFood: (state, action) => {
      state.data.push(action.payload);
    }
  }
});

export const { addFood } = foodSlice.actions;

export default foodSlice.reducer;