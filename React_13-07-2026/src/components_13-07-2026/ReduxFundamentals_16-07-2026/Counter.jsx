import { useSelector, useDispatch } from "react-redux";

import {
  increment,
  decrement,
  reset,
  increaseByFive
} from "./counterActions";


function Counter() {

  let count = useSelector(
    (state) => state.count
  );

  let dispatch = useDispatch();

  return (
    <div>

      <h2>Count: {count}</h2>

      <button onClick={() => dispatch(increment())}>
        Increment
      </button>

      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>

      <button onClick={() => dispatch(reset())}>
        Reset
      </button>

      <button onClick={() => dispatch(increaseByFive())}>
        Increase By 5
      </button>

    </div>
  );
}

export default Counter;