import React, { useMemo, useState } from 'react'

function UseMemo() {
    let [number ,setnumber ] = useState(10);
    let [count , setcount] = useState(0);

    let calculation = useMemo(()=>{
        console.log("calculating...");

        let res = 0;

        for(let i = 0; i<1000;i++){
            res += number;
        }

        return res;
    },[number]);

  return (
    <div>
        <h1>usememo practice </h1>
        <h2>Number : {number}</h2>
        <h2>Result : {calculation}</h2>
        <h2>Count : {count}</h2>

        <button onClick={()=>setnumber(number + 1)}>Change number </button>

        <button onClick={()=>setcount( count + 1)}>Change Count</button>
    </div>
  )
}

export default UseMemo