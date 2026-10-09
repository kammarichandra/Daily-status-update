import React from 'react'
import Usecounter from './Usecounter'

function Counter() {
    let {count , increment , decrement , reset} = Usecounter(0);

  return (
    <div>
        <h2>Count : {count}</h2>
        <button onClick={increment}>inc</button>
        <button onClick={decrement}>dec</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}

export default Counter