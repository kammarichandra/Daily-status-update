import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./CounterSlice";

const Counter = () => {
  let count = useSelector((state) => state.counter.count);
  let dispatch = useDispatch();

  return (
    <div>
      <h1>Redux Counter Component</h1>
      <h2>Count : {count}</h2>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Counter;
