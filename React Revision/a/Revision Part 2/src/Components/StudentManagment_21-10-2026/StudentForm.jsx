import { useState } from 'react'

let emptyform = {
    name: "",
    email: "",
    course: "",
    marks: ""
}

function StudentForm({ initialData, onSave, onCancel }) {
    let [form, setform] = useState(() => initialData ? {
        name: initialData.name,
        email: initialData.email,
        course: initialData.course,
        marks: String(initialData.marks)
    } : { ...emptyform })
    let [error, seterror] = useState({})

    let handlechange = (e) => {
        let { name, value } = e.target

        setform(prev => ({
            ...prev,
            [name]: value
        }))
    }

    let handlesubmit = (event) => {
        event.preventDefault()

        const newErrors = {}

        if (!form.name.trim()) {
            newErrors.name = 'Name is required'
        }
        if (!form.course) {
            newErrors.course = 'Please select a course'
        }

        if (
            form.marks === '' ||
            !Number.isFinite(Number(form.marks)) ||
            Number(form.marks) < 0 ||
            Number(form.marks) > 100
        ) {
            newErrors.marks = 'Marks must be between 0 and 100'
        }

        seterror(newErrors)

        if (Object.keys(newErrors).length > 0) return

        onSave({
            name: form.name.trim(),
            email: form.email.trim(),
            course: form.course,
            marks: Number(form.marks)
        })
    }
    return (
        <form className="student-form" onSubmit={handlesubmit}>

            <h2>{initialData ? 'Edit Student' : 'Add Student'}</h2>

            <label htmlFor="name">Student Name</label>
            <input id="name" name="name" value={form.name} onChange={handlechange} placeholder="Enter full name" />
            {error.name && <p className="error">{error.name}</p>}

            <label htmlFor="email">Email Address</label>
            <input id="email" name="email" type="email" value={form.email} onChange={handlechange} placeholder="student@example.com" />
            {error.email && <p className="error">{error.email}</p>}

            <label htmlFor="course">Course</label>
            <select id="course" name="course" value={form.course} onChange={handlechange} >
                <option value="">Select course</option>
                <option value="React">React</option>
                <option value="Java">Java</option>
                <option value="Python">Python</option>
                <option value="UI/UX Design">UI/UX Design</option>
            </select>

            {error.course && <p className="error">{error.course}</p>}

            <label htmlFor="marks">Marks (0–100)</label>
            <input id="marks" name="marks" type="number" min="0" max="100" value={form.marks} onChange={handlechange} placeholder="Enter marks" />
            {error.marks && <p className="error">{error.marks}</p>}

            <div className="form-actions">
                <button type="submit">
                    {initialData ? 'Update Student' : 'Add Student'}
                </button>

                <button type="button" className="secondary" onClick={onCancel}>Cancel</button>
            </div>
        </form>
    )
}

export default StudentForm