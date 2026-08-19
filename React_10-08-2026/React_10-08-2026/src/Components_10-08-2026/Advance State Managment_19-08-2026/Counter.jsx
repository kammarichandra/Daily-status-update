import React, { useReducer } from 'react'
import CounterReducer, { initialstate } from './CounterReducer'

function Counter() {

    let [state, dispatch] = useReducer(CounterReducer, initialstate);


  return (
    <div>
        
      <h1>Count: {state.count}</h1>

      <button onClick={() => dispatch({ type: "increment" })} > inc </button><br /><br />

      <button onClick={() => dispatch({ type: "decrement" })} > dec </button><br /><br />

      <button onClick={() => dispatch({ type: "reset" })} > Reset </button><br /><br />

      <button onClick={() => dispatch({ type: "incrementByAmount", payload: 5 }) } > +5 </button>

    </div>
  )
}

export default Counter