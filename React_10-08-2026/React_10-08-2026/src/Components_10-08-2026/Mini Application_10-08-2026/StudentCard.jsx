import React from 'react'

function StudentCard({ name, course, marks }) {

  let isPassed = marks >= 40;

  return (
    <div className="student-card">
      <h3>{name}</h3>

      <p>
        Course: <strong>{course}</strong>
      </p>

      <p>
        Marks: <strong>{marks}</strong>
      </p>

      {isPassed ? (
        <p className="passed">Result: Passed</p>
      ) : (
        <p className="failed">Result: Failed</p>
      )}
    </div>
  )
}

export default StudentCard