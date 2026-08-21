import {
  Link,
  useParams
} from "react-router-dom";

import students from "../Data/Students";

function StudentDetails() {
  const { id } = useParams();

  const student = students.find(
    (student) =>
      student.id === Number(id)
  );

  if (!student) {
    return (
      <div>
        <h1>Student Not Found</h1>

        <Link to="/dashboard/students">
          Back to Students
        </Link>
      </div>
    );
  }

  return (
    <div className="details-card">

      <h1>{student.name}</h1>

      <p>
        <strong>ID:</strong>{" "}
        {student.id}
      </p>

      <p>
        <strong>Course:</strong>{" "}
        {student.course}
      </p>

      <p>
        <strong>Year:</strong>{" "}
        {student.year}
      </p>

      <p>
        <strong>Email:</strong>{" "}
        {student.email}
      </p>

      <Link to="/dashboard/students" >
        ← Back to Students
      </Link>

    </div>
  );
}

export default StudentDetails;