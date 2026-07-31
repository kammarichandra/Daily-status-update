import React from "react";

const categories = [
  {
    id: 1,
    name: "Fruits",
    items: ["apple", "banana", "orange", "mango"],
  },
  {
    id: 2,
    name: "Vegetables",
    items: ["carrot", "potato", "tomato", "onion"],
  },
  {
    id: 3,
    name: "Animals",
    items: ["dog", "cat", "lion", "tiger"],
  },
];

function NestedList() {
  return (
    <div>
      {categories.map((category) => (
        <div key={category.id}>
          <h2>{category.name}</h2>

          <ul>
            {category.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default NestedList;