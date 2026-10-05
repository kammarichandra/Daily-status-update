import React from 'react'

function Callingfunction() {

    function showmsg(){
        alert("welcome to react")
    }
  return (
    <div>
        <h1>Calling function</h1>
        <button onClick={showmsg}>clickme</button>
    </div>
  )
}

export default Callingfunction