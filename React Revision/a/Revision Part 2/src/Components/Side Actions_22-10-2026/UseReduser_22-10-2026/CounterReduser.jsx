import React, { useReducer } from 'react'

let initialstate = {
    count: 0,
}

// reduser function 

let counterReduser = (state, action) => {

    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };

        case "DECREMENT":
            return { count: state.count - 1 };

        case "RESET":
            return initialstate;

        default:
            return state;
    }

}

// component
function CounterReduser() {

    let [state, dispatch] = useReducer(counterReduser, initialstate);


    return (

        <div style={{ textAlign: "center", marginTop: "50px" }}>

            <h1>useReducer Counter</h1>

            <h2>Count: {state.count}</h2>

            <button onClick={() => dispatch({ type: "INCREMENT" })}> Increment  </button>

            <button onClick={() => dispatch({ type: "DECREMENT" })} style={{ margin: "0 10px" }} >
                Decrement 
            </button>

            <button onClick={() => dispatch({ type: "RESET" })}> Reset </button>


        </div>
    )
}

export default CounterReduser