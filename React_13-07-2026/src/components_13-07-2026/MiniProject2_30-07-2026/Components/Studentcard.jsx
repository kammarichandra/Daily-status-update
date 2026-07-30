import React from "react";

let StudentCard = React.memo(({ student }) => {

  console.log(student.name + " Rendered");

  return (

    <div className="card">
      <h3>{student.name}</h3>
      <p>Marks : {student.marks}</p>
      <p>Status : {student.marks >= 50 ? "Pass" : "Fail"}</p>
    </div>
    
  );
});

export default StudentCard;