import React from 'react'
import { Link } from "react-router-dom";

function Students() {
    let students = [
    { id: 1, name: "chandra" },
    { id: 2, name: "sekahr" },
    { id: 3, name: "kcs" },
  ];

  return (
    <>
    <h1>Students</h1>

      {students.map((student) => (
        <div key={student.id}>
          <Link to={`/students/${student.id}`}>
            {student.name}
          </Link>
        </div>
      ))}
    </>
  )
}

export default Students