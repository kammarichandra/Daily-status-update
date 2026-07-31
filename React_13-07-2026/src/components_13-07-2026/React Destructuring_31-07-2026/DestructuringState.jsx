import React, { useState } from 'react'

function DestructuringState() {

    let [count , setcount] = useState(0)

  return (
    <div>
        <h2>{count}</h2>
        <button onClick={()=>setcount(count+1)}>increment</button>
    </div>
  )

}

export default DestructuringState