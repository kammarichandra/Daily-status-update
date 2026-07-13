import { createSlice } from "@reduxjs/toolkit";

let counterslice = createSlice({
    name : "counter",

    initialState : {
         count : 0,
    },
    reducers : {
        increment : (state)=>{
            state.count += 1;
        },
        decrement : (state)=>{
            state.count -= 1;
        },
        reset : (state)=>{
            state.count = 0;
        }
    }
});

export let {increment , decrement , reset} = counterslice.actions;

export default counterslice.reducer;