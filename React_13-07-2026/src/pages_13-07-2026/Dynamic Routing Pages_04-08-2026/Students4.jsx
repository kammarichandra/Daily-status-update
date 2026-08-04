import React from 'react'
import StudentsData from '../../components_13-07-2026/Dynamic Routing_04-08-2026/StudentsData'
import { Link } from 'react-router-dom'

function Students4() {
  return (
    <div>
      <h1>Students List</h1>

      {StudentsData.map((student) => (

        <div key={student.id}>

          <Link to={`/StudentsData/${student.id}`}> {student.name} </Link>

        </div>
        
      ))}
    </div>
  )
}

export default Students4