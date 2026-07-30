import React from "react";
import StudentCard from "./StudentCard";

function Studentlist({ students }) {

  console.log("Student List Rendered");

  return (
    <>
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
        />
      ))}
    </>
  );
}

export default Studentlist;