import { createSlice } from "@reduxjs/toolkit";


let cartSlice = createSlice({

  name:"cart",

  initialState:{
    items:[]
  },

  reducers:{

    addToCart:(state,action)=>{

      state.items.push(action.payload);

    },


    removeFromCart:(state,action)=>{

      state.items =
      state.items.filter(
        item=>item.id !== action.payload
      );

    },


    clearCart:(state)=>{

      state.items=[];

    }

  }

});


export let {
  addToCart,
  removeFromCart,
  clearCart

} = cartSlice.actions;


export default cartSlice.reducer;