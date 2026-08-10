import React from 'react'
import StudentCard from './StudentCard'
function StudentsList({students}) {
  return (

     <div className="student-list">

      <h2>Student List</h2>


      {students.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          course={student.course}
          marks={student.marks}
        />
      ))}

    </div>
  )
}

export default StudentsList