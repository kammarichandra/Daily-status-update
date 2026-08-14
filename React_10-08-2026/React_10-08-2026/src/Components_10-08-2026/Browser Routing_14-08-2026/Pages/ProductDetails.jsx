import { Link, useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  return (
    <div className="page">
      <h1>Product Details</h1>

      <h2>Product ID: {id}</h2>

      <p>
        You are viewing the details of product {id}.
      </p>

      <p>
        This ID comes from the URL using useParams().
      </p>

      <Link to="/products">
        ← Back to Products
      </Link>
    </div>
  );
}

export default ProductDetails;