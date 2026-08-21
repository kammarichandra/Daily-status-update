import { Link } from "react-router-dom";

function Products2() {
  const products = [
    {
      id: 101,
      name: "iPhone"
    },
    {
      id: 102,
      name: "Laptop"
    },
    {
      id: 103,
      name: "Headphones"
    }
  ];

  return (
    <div>
      <h1>Products</h1>

      <div className="products-container">
        {products.map((product) => (
          <div className="product-card" key={product.id} >

            <h2>{product.name}</h2>

            <p>Product ID: {product.id}</p>

            <Link to={`/products/${product.id}`}> View Product </Link>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products2;