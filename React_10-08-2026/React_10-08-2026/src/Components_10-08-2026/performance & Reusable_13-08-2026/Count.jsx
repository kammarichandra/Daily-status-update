import React from 'react'
import CustomHook from './CustomHook'
function Count() {
    const {
      count,
      increment,
      decrement,
      reset,
    } = CustomHook(10);

  return (
    <>
      <h1>{count}</h1>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default Count;