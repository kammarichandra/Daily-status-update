import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  return (
    <div className="product-details">
      <h1>Product Details</h1>

      <h2>Product ID: {id}</h2>

      <p>
        You are viewing the details of product {id}.
      </p>
    </div>
  );
}

export default ProductDetails;