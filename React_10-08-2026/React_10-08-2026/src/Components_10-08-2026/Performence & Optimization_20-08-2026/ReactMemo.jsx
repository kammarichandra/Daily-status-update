import React, { useState } from 'react'
import User from './User'
function ReactMemo() {
    let [count , setcount] = useState(0);

  return (
    <div>
        <h1>react memo practice </h1>
        <h1>count :{count}</h1>

        <button onClick={()=>setcount(count +1)}>count </button>

        <User name={"chandra"}/>
    </div>
  )
}

export default ReactMemo