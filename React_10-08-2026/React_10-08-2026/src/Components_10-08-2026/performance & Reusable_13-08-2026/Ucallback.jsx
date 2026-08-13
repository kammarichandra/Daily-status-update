import React, { useCallback, useState } from 'react'
import UsecallbackChild from './UsecallbackChild'

function Ucallback() {

  const [count, setCount] = useState(0);
  const handleclick = useCallback(()=>{
    console.log("use callback child clicked")
  },[]);
  return (
    <div>
      <h2>useCallback()</h2>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <UsecallbackChild onClick={handleclick} />
    </div>
  )
}

export default Ucallback