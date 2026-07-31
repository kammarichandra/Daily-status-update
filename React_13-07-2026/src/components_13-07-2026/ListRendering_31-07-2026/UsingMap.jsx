import React from "react";

function UsingMap() {
  const fruits = ["apple", "mango", "orange", "banana"];

  return (
    <div>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default UsingMap;