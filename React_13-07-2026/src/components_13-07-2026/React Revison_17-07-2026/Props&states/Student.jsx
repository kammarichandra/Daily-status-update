import { useState } from "react";

function Student(props) {
  const [marks, setMarks] = useState(80);

  return (

    <div>

      <h2>{props.name}</h2>

      <p>Course: {props.course}</p>

      <h3>Marks: {marks}</h3>

      <button onClick={() => setMarks(marks + 5)}> Increase Marks </button>

    </div>
    
  );
}

export default Student;