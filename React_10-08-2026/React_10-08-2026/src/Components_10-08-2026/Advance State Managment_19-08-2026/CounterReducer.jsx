import React from 'react'

export let initialstate = {
    count: 0
};

function CounterReducer(state, action) {

    switch (action.type) {

        case "increment":
            return {
                ...state,
                count: state.count + 1
            };

        case "decrement":
            return {
                ...state,
                count: state.count - 1
            };

        case "reset":
            return {
                ...state,
                count: 0
            };
        case "incrementByAmount":
            return {
                ...state,
                count: state.count + action.payload
            };

        default:
            return state

    }
}

export default CounterReducer