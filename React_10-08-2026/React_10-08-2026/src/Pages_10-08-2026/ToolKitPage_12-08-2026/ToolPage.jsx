import { useSelector, useDispatch } from "react-redux";

import { increment, decrement, reset } from "../../Components_10-08-2026/ReduxToolKit_12-08-2026/CounterSlice";

function ToolPage() {

  let count = useSelector((state) => state.counter.count);

  let dispatch = useDispatch();

  return (

    <div>

      <h2>Count: {count}</h2>

      <button onClick={() => dispatch(increment())}> + </button>

      <button onClick={() => dispatch(decrement())}> - </button>

      <button onClick={() => dispatch(reset())}> Reset </button>

    </div>
  );
}

export default ToolPage;