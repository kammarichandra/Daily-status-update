import useCounter from "./useCounter";

function CounterA() {
  let { count, increment } = useCounter();

  return (
    <>
      <h2>Counter A: {count}</h2>

      <button onClick={increment}>
        Increment
      </button>
    </>
  );
}

export default CounterA;