import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid gray",
            margin: "10px",
            padding: "10px",
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            width="100"
          />

          <h4>{product.title}</h4>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Products;