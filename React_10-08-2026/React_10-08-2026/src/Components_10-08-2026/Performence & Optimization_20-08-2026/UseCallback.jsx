import React, { useCallback, useState } from 'react'
import Button from './Button';

function UseCallback() {
    let[count , setcount] = useState(0);

    let handleclick = useCallback(()=>{
        console.log("button clickeddd");
    },[]);


  return (
    <div>
        <h1>Usecallback practice </h1>

        <h2>count : {count}</h2>

        <button onClick={()=>{setcount(count + 1)}}>increase</button>
        <Button handleclick={handleclick}/>
        
    </div>
  )
}

export default UseCallback