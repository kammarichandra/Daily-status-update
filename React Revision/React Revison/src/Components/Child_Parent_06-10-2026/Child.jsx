import React from 'react'

function Child({sendData}) {
    let handleclick = ()=>{
        sendData(" Recived from child : chandra sekhar")
    }
  return (
    <div>
        <button onClick={handleclick}>Click Me</button>
    </div>
  )
}

export default Child