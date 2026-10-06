import React from 'react'

function Card({name , age , skills}) {
  return (
    <div>
        <h2>Student Card</h2>
        <h2>Name : {name}</h2>
        <p>Age : {age}</p>
        <p>Skills : {skills}</p>
    </div>
  )
}

export default Card