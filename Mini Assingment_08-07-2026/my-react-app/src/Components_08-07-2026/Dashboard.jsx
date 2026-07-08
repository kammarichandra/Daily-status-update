import { useState } from "react";
import StudentList from "./Studentlist";
import AddStudent from "./Addstudent";

function Dashboard() {
  const [students, setStudents] = useState([
    { id: 1, name: "chandra", course: "React" },
    { id: 2, name: "sekhar", course: "JavaScript" },
  ]);

  function addStudent(student) {
    setStudents((prevStudents) => [
      ...prevStudents,
      {
        id: Date.now(),
        ...student,
      },
    ]);
  }

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Student Dashboard</h1>
      <AddStudent addStudent={addStudent} />
      <StudentList students={students} />
    </div>
  );
}

export default Dashboard;