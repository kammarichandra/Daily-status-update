import React from 'react'
import { useState } from 'react'

function counter() {

    let [count , setcount] = useState(0);

  return (
    <div>
        <h1>count : {count}</h1>
        
        <button onClick={()=>setcount(count+1)}> inc</button>

        <button onClick={()=>setcount(count-1)} > dec</button>

    </div>
  )
}

export default counter;