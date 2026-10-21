import React, { useState } from 'react'

function Counter() {

    let[count,setcount] = useState(0);

  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={()=> setcount(count +1)}>+</button>
        <button onClick={()=> setcount(count -1)}>-</button>
        <button onClick={()=> setcount(0)}>reset</button>
    </div>
  )
}

export default Counter