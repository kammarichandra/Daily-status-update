import React from 'react'

function EmpCard({name , role , sallary}) {

  return (
    <div className='Employee-card'>
        <h2>{name}</h2>
        <h2>Role : {role}</h2>
        <h2>Sallary : {sallary}</h2>
    </div>
  )
}

export default EmpCard