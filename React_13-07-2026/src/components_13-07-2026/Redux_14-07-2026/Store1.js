import { configureStore } from "@reduxjs/toolkit";

import StudentReducer from "./Studentslice";


export const store1 = configureStore({

    reducer: {

        student: StudentReducer,

    },

});