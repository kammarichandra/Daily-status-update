import React, { useState } from 'react'

function Counter() {
    let [count , setcount] = useState(0);

  return (
    <div>
        <h2>Count : {count}</h2>

        <button onClick={()=>setcount(count +1)}>inc</button>
        <button onClick={()=>setcount(count-1)}>dec</button>
        <button onClick={()=>setcount(0)}>reset</button>
    </div>
  )
}

export default Counter