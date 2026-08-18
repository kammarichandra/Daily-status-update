import React from 'react'

function Errormsg({message}) {
  return (
    <div>

      <h3 style={{ color: "red" }}> {message} </h3>
      <button> Try Again </button>
      
    </div>
  )
}

export default Errormsg