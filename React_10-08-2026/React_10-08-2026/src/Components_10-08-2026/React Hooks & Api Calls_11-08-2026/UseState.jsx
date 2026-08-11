import React, { useState } from 'react'

function UseState() {
    let [count , setcount] = useState(0);

  return (
    <div>
        <h2>count : {count}</h2>
        <button onClick={()=> setcount(count +1)}>inc</button>
        <button onClick={()=> setcount(count -1)}>dec</button>
    </div> 
  )
}

export default UseState