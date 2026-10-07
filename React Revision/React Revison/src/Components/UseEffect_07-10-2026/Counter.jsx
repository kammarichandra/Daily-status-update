import React, { useEffect, useState } from 'react'

function Counter() {

    let [count , setcount] = useState(0)

    useEffect(()=>{
        console.log("count updated..")
    },[count])
    
  return (
    <div>
        <h2>UseEffect</h2><br />
        <h2>Count : {count}</h2>
        <button onClick={()=>setcount(count +1)}>inc</button>
        <button onClick={()=>setcount(count-1)}>dec</button>
        <button onClick={()=>setcount(0)}>reset</button>
    </div>
  )
}

export default Counter