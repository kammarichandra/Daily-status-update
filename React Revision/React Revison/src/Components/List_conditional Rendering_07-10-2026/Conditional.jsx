import React from 'react'

function Conditional({isActive}) {
    let name = "chandra"
  return (
    <div>
        <h2>Conditional Rendering</h2>
        <h3>Name : {name}</h3>
        <h3>status : {isActive ?(<p>Employee is active</p>):(<p>Employee is not active</p>)}</h3>
        
    </div>
  )
}

export default Conditional