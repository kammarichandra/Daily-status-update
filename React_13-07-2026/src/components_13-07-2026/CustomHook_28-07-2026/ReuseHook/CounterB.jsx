import useCounter from "./useCounter";

function CounterB() {
  let { count, increment } = useCounter();

  return (
    <>
      <h2>Counter B: {count}</h2>

      <button onClick={increment}>
        Increment
      </button>
    </>
  );
}

export default CounterB;