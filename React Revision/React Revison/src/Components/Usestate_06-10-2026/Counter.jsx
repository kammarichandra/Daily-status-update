import React, { useState } from 'react'

function Counter() {
    
    let[count , setcount] = useState(0);

  return (
    <div>
        <h1>Count : {count}</h1>

        <button onClick={()=>setcount(count + 1)}>inc</button><br />
        <button onClick={()=>setcount(count -1)}>dec</button><br />
        <button onClick={()=>setcount(0)}>reset</button><br />
    </div>
  )
}

export default Counter