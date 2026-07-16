// src/reducers/loginReducer.js


export let initialState = {

    email: "",

    password: "",

    loading: false,

    error: null,

    isLoggedIn: false

};



export function loginReducer(state, action) {


    switch(action.type) {


        case "UPDATE_FIELD":

            return {

                ...state,

                [action.payload.field]: action.payload.value

            };



        case "LOGIN_START":

            return {

                ...state,

                loading: true,

                error: null

            };



        case "LOGIN_SUCCESS":

            return {

                ...state,

                loading: false,

                isLoggedIn: true

            };



        case "LOGIN_ERROR":

            return {

                ...state,

                loading: false,

                error: action.payload

            };



        case "LOGOUT":

            return initialState;



        default:

            return state;

    }

}