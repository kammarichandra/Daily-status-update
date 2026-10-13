import React, { useReducer } from 'react'

let initialstate = { count: 0 };

let reduser = (state, action) => {
    switch (action.type) {
        case "inc":
            return { count: state.count + 1 };

        case "dec":
            return { count: state.count - 1 };

        case "reset":
            return initialstate;

        default:
            return state;
    }
}
function Counter1() {

    let [state , dispatch] =useReducer(reduser,initialstate);

    return (
        <div>
            <h2>Count : {state.count}</h2>

            <button onClick={()=>dispatch({type : "inc"})}>inc</button>

            <button onClick={()=>dispatch({type : "dec"})}>dec</button>

            <button onClick={()=>dispatch({type : "reset"})}>reset</button>
        </div>
    )
}

export default Counter1