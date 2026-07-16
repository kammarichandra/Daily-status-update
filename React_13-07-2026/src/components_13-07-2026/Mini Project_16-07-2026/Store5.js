import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice";
import productReducer from "./productSlice";


let store5 =configureStore({

reducer:{

cart:cartReducer,
products:productReducer

}

});


export default store5;