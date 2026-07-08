import { useState } from "react";

function AddStudent({ addStudent }) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  function handleSubmit() {
    if (!name.trim() || !course.trim()) return;

    addStudent({
      name: name.trim(),
      course: course.trim(),
    });

    setName("");
    setCourse("");
  }

  return (
    <div className="add-student-form">
      <h2 className="section-title">Add Student</h2>

      <input
        className="input-field"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="input-field"
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />

      <button className="submit-btn" onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
}

export default AddStudent;