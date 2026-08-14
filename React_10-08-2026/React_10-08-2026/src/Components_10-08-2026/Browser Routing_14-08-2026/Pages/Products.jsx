import { Link } from "react-router-dom";

function Products() {
  const products = [
    {
      id: 101,
      name: "Laptop",
      price: 55000,
    },
    {
      id: 102,
      name: "Mobile",
      price: 25000,
    },
    {
      id: 103,
      name: "Headphones",
      price: 3000,
    },
    {
      id: 104,
      name: "Keyboard",
      price: 2000,
    },
  ];

  return (
    <div className="page">
      <h1>Products</h1>

      <div className="products">

        {products.map((product) => (
            
          <div className="product-card" key={product.id}>
            <h2>{product.name}</h2>

            <p>Price: ₹{product.price}</p>

            <p>Product ID: {product.id}</p>

            <Link to={`/products/${product.id}`}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;