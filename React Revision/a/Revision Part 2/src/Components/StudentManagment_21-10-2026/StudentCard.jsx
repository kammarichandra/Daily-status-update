import React from 'react'

function StudentCard({
    student,
    onView,
    onEdit,
    onDelete
}) {
    return (
        <article className="student-card">
            
            <div className="student-avatar">
                {student.name.charAt(0).toUpperCase()}
            </div>

            <h3>{student.name}</h3>

            <p className="student-id">ID: {student.id}</p>
            <p>{student.email}</p>
            <p>Course: {student.course}</p>

            <span className="marks">
                Marks: {student.marks}/100
            </span>

            <div className="card-actions">

                <button onClick={() => onView(student)}> Details </button>

                <button className="secondary" onClick={() => onEdit(student)} > Edit </button>

                <button className="danger" onClick={() => onDelete(student.id)} > Delete </button>

            </div>
        </article>
    )
}

export default StudentCard