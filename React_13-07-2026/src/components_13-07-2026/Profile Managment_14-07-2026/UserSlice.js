import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,

    reducers: {
        addUser: (state, action) => {
            state.user = {
                id: Date.now(),
                name: action.payload,
            };
        },

        updateUser: (state, action) => {
            if (state.user) {
                state.user.name = action.payload;
            }
        },

        removeUser: (state) => {
            state.user = null;
        },
    },
});

export const {
    addUser,
    updateUser,
    removeUser,
} = userSlice.actions;

export default userSlice.reducer;