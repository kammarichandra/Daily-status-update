import React, { useEffect } from 'react'

function UseEffect() {

    useEffect(()=>{
        console.log("component loaded")
    },[])
  return (
    <div>
        <h2>welcome to react </h2>
    </div>
  )
}

export default UseEffect