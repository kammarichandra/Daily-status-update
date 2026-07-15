import { useReducer } from "react";

import { CounterReducer,initialstate } from "./CounerReducer";

import { inc,dec,reset } from "./CounerReducer";


function Counter(){

    let [ state , dispatch] = useReducer(CounterReducer,initialstate);


    return (

       <div>
      <h2>Count: {state.count}</h2>

      <button onClick={() => dispatch({ type: inc })}>
        +
      </button>

      <button onClick={() => dispatch({ type: dec })}>
        -
      </button>

      <button onClick={() => dispatch({ type: reset })}>
        Reset
      </button>
    </div>

    )
}
export default Counter;