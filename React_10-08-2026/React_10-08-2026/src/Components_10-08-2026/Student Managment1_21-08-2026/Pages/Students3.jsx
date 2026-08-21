import { Link } from "react-router-dom";
import students from "../Data/Students";

function Students3() {
  return (
    <div>
      <h1>Students</h1>

      <div className="student-grid">

        {students.map((student) => (
          <div
            className="student-card"
            key={student.id}
          >
            <h2>{student.name}</h2>

            <p>
              Course: {student.course}
            </p>

            <p>
              Year: {student.year}
            </p>

            <Link to={`/dashboard/students/${student.id}`} > View Details </Link>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Students3;