import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    students: [],
};


const studentSlice = createSlice({

    name: "student",

    initialState,

    reducers: {

        addstudent: (state, action) => {

            state.students.push({

                id: Date.now(),

                name: action.payload,

            });

        },


        deletestudent: (state, action) => {

            state.students = state.students.filter(

                (student) => student.id !== action.payload

            );

        },

    },

});


export const {
    addstudent,
    deletestudent
} = studentSlice.actions;


export default studentSlice.reducer;