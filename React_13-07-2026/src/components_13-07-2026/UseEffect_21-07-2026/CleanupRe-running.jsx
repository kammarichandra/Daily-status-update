import React from 'react'
import { useState , useEffect } from 'react'
function CleanupRerunning() {
  let [count , setcount] = useState(0);

  useEffect(()=> {
    console.log("effect : ",count);

    return ()=>{
      console.log("cleanup :" , count);
    };
  },[count]);

  return (
    
    <button onClick={()=> setcount(count + 1)}>{count}</button>
  )
}

export default CleanupRerunning;