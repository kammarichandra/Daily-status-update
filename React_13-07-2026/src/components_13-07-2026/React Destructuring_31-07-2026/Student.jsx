import React from "react";

function Student(props) {

  return (
    <div>

      <h2>{props.name}</h2>
      <h2>{props.age}</h2>
      <h2>{props.course}</h2>
      
    </div>
  );

}

export default Student;