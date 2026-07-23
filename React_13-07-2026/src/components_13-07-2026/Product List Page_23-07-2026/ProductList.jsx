import React from "react";

function ProductList({ products }) {

  return (
    <div>
      <h2>🛒 Products</h2>

      {
        products.map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <p>Price: ₹{product.price}</p>
            <hr />
          </div>
        ))
      }

    </div>
  );
}

export default ProductList;