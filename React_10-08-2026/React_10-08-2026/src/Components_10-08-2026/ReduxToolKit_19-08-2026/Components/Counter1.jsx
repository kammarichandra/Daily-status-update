import { useDispatch, useSelector } from "react-redux";

import { increment, decrement, reset, incrementByAmount } from "../Feature/CounterSlice";

function Counter1() {

  const count = useSelector( (state) => state.counter.value );

  const dispatch = useDispatch();

  return (
    <div>
        
      <h1>Count: {count}</h1>

      <button onClick={() => dispatch(increment())}> inc </button>

      <button onClick={() => dispatch(decrement())}> dec </button>

      <button onClick={() => dispatch(reset())}> Reset </button>

      <button onClick={() => dispatch(incrementByAmount(5))} > +5 </button>

    </div>
  );
}

export default Counter1;