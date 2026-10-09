import React, { useState } from 'react'

function Usecounter(initialValue = 0) {

    let [count,setcount] = useState(initialValue);

    let increment = ()=>setcount(c => c+1);
    let decrement = ()=>setcount(c => c-1);
    let reset = ()=>setcount(initialValue);


  return { count ,increment,decrement,reset}
}

export default Usecounter