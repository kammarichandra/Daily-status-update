import { useReducer } from "react";
   
let initialState = {
  count: 0,
};

function reducer(state, action) {

  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
      };

    case "decrement":
      return {
        count: state.count - 1,
      };

    case "reset":
      return {
        count: 0,
      };

    default:
      return state;
  }

}

function Counter() {

  let [state, dispatch] = useReducer(reducer, initialState);

  return (

    <div>

      <h2>Count: {state.count}</h2>

      <button onClick={() => dispatch({ type: "increment" })}> + </button>

      <button onClick={() => dispatch({ type: "decrement" })}> - </button>

      <button onClick={() => dispatch({ type: "reset" })}> Reset </button>

    </div>

  );
}

export default Counter;