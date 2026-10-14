import React from 'react'
import { memo } from 'react'

function Empcard({name , role ,employee}) {
    console.log("empcard re-renderd : ",name)
  return (
    <div>
        <h3>{name}</h3>
        <p>role : {role}</p>
        {employee && (<p>Dept : {employee.dept}</p>)}
    </div>
  )
}

export default memo(Empcard)