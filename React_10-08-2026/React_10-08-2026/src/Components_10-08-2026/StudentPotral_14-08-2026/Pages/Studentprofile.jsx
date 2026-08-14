import { Link, useParams } from "react-router-dom";

function StudentProfile() {
  let { id } = useParams();

  let students = {
    101: {
      name: "Chnadra sekhar",
      department: "Computer Science",
      year: "3rd Year",
    },

    102: {
      name: "Rohit Sharma",
      department: "Information Technology",
      year: "2nd Year",
    },

    103: {
      name: "Arjun Reddy",
      department: "Computer Science",
      year: "4th Year",
    },
  };

  let student = students[id];

  if (!student) {
    return (
      <div style={{ padding: "30px" }}>
        <h1>Student Not Found</h1>

        <p>No student exists with ID: {id}</p>

        <Link to="/">Go Home</Link>
      </div>
    );
  }

  return (

    <div style={{ padding: "30px" }}>

      <h1>👨‍🎓 Student Profile</h1>

      <hr />

      <p> <strong>Student ID:</strong> {id} </p>

      <p> <strong>Name:</strong> {student.name} </p>

      <p> <strong>Department:</strong> {student.department} </p>

      <p> <strong>Year:</strong> {student.year} </p>
      
    </div>

  );
}

export default StudentProfile;