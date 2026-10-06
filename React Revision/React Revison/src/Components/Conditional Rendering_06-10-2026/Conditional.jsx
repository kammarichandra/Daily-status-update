import React from 'react'

function Conditional({isActive}) {
  return (
    <div>
        {isActive ?(<p>Employee is active</p>):(<p>Employee is not active</p>)}
        
    </div>
  )
}

export default Conditional