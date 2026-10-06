import React from 'react'

function SendingData({name,age,role,city}) {
  return (
    <div>
        <h2>{name}</h2>
        <p>{age}</p>
        <p>{role}</p>
        <p>{city}</p>
    </div>
  )
}

export default SendingData