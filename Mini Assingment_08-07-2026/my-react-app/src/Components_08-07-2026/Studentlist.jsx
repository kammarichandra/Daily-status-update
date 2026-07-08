import StudentCard from "./Studentcard";

function StudentList({ students }) {
  return (
    <div className="student-list-section">
      <h2 className="section-title">Student List</h2>

      <div className="student-list">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            course={student.course}
          />
        ))}
      </div>
    </div>
  );
}

export default StudentList;