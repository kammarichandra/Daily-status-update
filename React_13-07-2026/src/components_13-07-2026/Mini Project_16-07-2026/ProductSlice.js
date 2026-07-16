import { createSlice } from "@reduxjs/toolkit";


let productSlice = createSlice({

    name: "products",

    initialState: {

        products: [

            {
                id: 1,
                name: "Laptop",
                price: 50000
            },

            {
                id: 2,
                name: "Mobile",
                price: 25000
            },

            {
                id: 3,
                name: "Keyboard",
                price: 1500
            },
             {
                id: 4,
                name: "headphones",
                price: 1500
            },

        ]

    },


    reducers: {}

});


export default productSlice.reducer;