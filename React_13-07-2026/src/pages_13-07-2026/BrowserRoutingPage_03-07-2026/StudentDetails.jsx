import React from 'react'
import { useParams } from 'react-router-dom'

function StudentDetails() {
    let {id} = useParams();

  return (
    <div>
        <h1>StudentDetails</h1>
        <h2>ID : {id}</h2>
    </div>
  )
}

export default StudentDetails