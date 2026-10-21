import React, { useState } from 'react'
import SearchBar from '../../Components/StudentManagment_21-10-2026/SearchBar'
import StudentCard from '../../Components/StudentManagment_21-10-2026/StudentCard'
import StudentForm from '../../Components/StudentManagment_21-10-2026/StudentForm'


let initialStudents = [
    {
        id: 101,
        name: 'Chandra',
        email: 'chandra@example.com',
        course: 'React',
        marks: 85
    },
    {
        id: 102,
        name: 'Rahul',
        email: 'rahul@example.com',
        course: 'Java',
        marks: 78
    },
    {
        id: 103,
        name: 'Priya',
        email: 'priya@example.com',
        course: 'Python',
        marks: 92
    }
]
function SMSPage() {

    let [students, setStudents] = useState(initialStudents)
    let [search, setSearch] = useState('')
    let [mode, setMode] = useState('list')
    let [selectedStudent, setSelectedStudent] = useState(null)

    let filteredStudents = students.filter(student => [
        student.name,
        student.email,
        student.course,
        String(student.id)
    ].some(value =>
        value.toLowerCase().includes(search.toLowerCase().trim())
    ))

    function handleAdd(data) {
        const newStudent = {
            id: Date.now(),
            ...data
        }

        setStudents(prev => [...prev, newStudent])
        setMode('list')
        setSearch('')
    }

    function handleEdit(data) {
        setStudents(prev =>
            prev.map(student =>
                student.id === selectedStudent.id
                    ? { ...student, ...data }
                    : student
            )
        )

        setSelectedStudent(null)
        setMode('list')
    }

    function handleDelete(id) {
        const confirmed = window.confirm(
            'Are you sure you want to delete this student?'
        )

        if (!confirmed) return

        setStudents(prev =>
            prev.filter(student => student.id !== id)
        )

        if (selectedStudent?.id === id) {
            setSelectedStudent(null)
            setMode('list')
        }
    }

    function openEdit(student) {
        setSelectedStudent(student)
        setMode('edit')
    }

    function openDetails(student) {
        setSelectedStudent(student)
        setMode('details')
    }

    function closeView() {
        setSelectedStudent(null)
        setMode('list')
    }

    return (
        <div className="app">
            <header className="topbar">
                <div>
                    <h1>StudentHub</h1>
                    <p>Student Management System</p>
                </div>

                <button onClick={() => {
                    setSelectedStudent(null)
                    setMode('add')
                }}>
                    + Add Student
                </button>
            </header>

            <section className="dashboard">
                <div className="stat-card">
                    <span>Total Students</span>
                    <h2>{students.length}</h2>
                </div>

                <div className="stat-card">
                    <span>React Students</span>
                    <h2>
                        {students.filter(s => s.course === 'React').length}
                    </h2>
                </div>

                <div className="stat-card">
                    <span>Average Marks</span>
                    <h2>
                        {students.length
                            ? (
                                students.reduce((sum, s) => sum + s.marks, 0) /
                                students.length
                            ).toFixed(1)
                            : '0.0'}
                    </h2>
                </div>
            </section>

            {mode === 'list' && (
                <section>
                    <div className="list-heading">
                        <h2>Student List</h2>
                        <SearchBar search={search} setSearch={setSearch} />
                    </div>

                    {filteredStudents.length > 0 ? (
                        <div className="student-grid">
                            {filteredStudents.map(student => (
                                <StudentCard
                                    key={student.id}
                                    student={student}
                                    onView={openDetails}
                                    onEdit={openEdit}
                                    onDelete={handleDelete}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="empty-state">
                            <h3>No students found</h3>
                            <p>Try another search or add a new student.</p>
                        </div>
                    )}
                </section>
            )}

            {(mode === 'add' || mode === 'edit') && (
                <StudentForm
                    key={mode + (selectedStudent?.id ?? 'new')}
                    initialData={
                        mode === 'edit' ? selectedStudent : null
                    }
                    onSave={mode === 'edit' ? handleEdit : handleAdd}
                    onCancel={closeView}
                />
            )}

            {mode === 'details' && selectedStudent && (
                <section className="details-panel">
                    <h2>Student Details</h2>

                    <p><strong>ID:</strong> {selectedStudent.id}</p>
                    <p><strong>Name:</strong> {selectedStudent.name}</p>
                    <p><strong>Email:</strong> {selectedStudent.email}</p>
                    <p><strong>Course:</strong> {selectedStudent.course}</p>
                    <p><strong>Marks:</strong> {selectedStudent.marks}/100</p>

                    <button onClick={() => openEdit(selectedStudent)}> Edit Student </button>

                    <button className="secondary" onClick={closeView}> Back to List </button>
                </section>
            )}
        </div>
    )
}

export default SMSPage