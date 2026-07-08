function StudentCard({ name, course }) {
  return (
    <div className="student-card">
      <h3 className="student-name">{name}</h3>
      <p className="student-course">Course: {course}</p>
    </div>
  );
}

export default StudentCard;