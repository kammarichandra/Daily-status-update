import React from "react";

const fruits = [
  { id: 1, name: "chandra" },
  { id: 2, name: "sekhar" },
  { id: 3, name: "kcs" },
  { id: 4, name: "rahul" },
  { id: 5, name: "ramesh" },
];

function Key() {
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            Key = {fruit.id}, {fruit.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Key;