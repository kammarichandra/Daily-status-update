import React, { useState } from 'react'
import StudentsList from '../../Components_10-08-2026/Mini Application_10-08-2026/StudentsList';
function ApplicationPage() {

    // STATE
    let [showStudents, setShowStudents] = useState(true);

    // Student data
    let students = [
        {
            id: 1,
            name: "chandra",
            course: "React",
            marks: 85,
        },
        {
            id: 2,
            name: "Priya",
            course: "JavaScript",
            marks: 92,
        },
        {
            id: 3,
            name: "Asha",
            course: "HTML & CSS",
            marks: 35,
        },
        {
            id: 4,
            name: "Sneha",
            course: "React",
            marks: 78,
        },
    ];


    let toggleStudents = () => {
        setShowStudents(!showStudents);
    };

    return (
        <div className="app">

            <h1>Student Dashboard</h1>

            <p> Total Students: <strong>{students.length}</strong> </p>

            <button onClick={toggleStudents}> {showStudents ? "Hide Students" : "Show Students"} </button>

            {showStudents ? (
                <StudentsList students={students} />
            ) : (
                <p className="hidden-message">Student list is currently hidden.</p>
            )}

        </div>
    )
}

export default ApplicationPage