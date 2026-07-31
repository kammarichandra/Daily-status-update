import React from "react";

const products = [
  { id: 1, name: "Laptop", available: true },
  { id: 2, name: "Phone", available: false },
  { id: 3, name: "Tablet", available: true },
];

function ConditionalRendering() {
  return (
    <div>
      <ul>
        {products.map(
          (product) =>
            product.available && (
              <li key={product.id}>
                {product.name}
              </li>
            )
        )}
      </ul>
    </div>
  );
}

export default ConditionalRendering;