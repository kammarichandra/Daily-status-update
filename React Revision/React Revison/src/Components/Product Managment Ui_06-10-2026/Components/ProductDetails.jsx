function ProductDetails({ product }) {
  return (
    <section className="details">

      <h2>Product Details</h2>

      <div className="details-card">

        <h3>{product.name}</h3>

        <p>
          <strong>Price:</strong> ₹{product.price}
        </p>

        <p>
          <strong>Category:</strong> {product.category}
        </p>

        <p>
          <strong>Stock:</strong> {product.stock}
        </p>

        <p>
          <strong>Description:</strong>
          <br />
          {product.description}
        </p>

        {/* Conditional Product Information */}
        {product.stock > 0 && (
          <p className="available"> This product is currently available. </p>
        )}

        {product.stock === 0 && (
          <p className="out"> This product is currently unavailable. </p>
        )}

        {product.price > 50000 && (
          <p className="premium"> Premium Product </p>
        )}

      </div>

    </section>
  );
}

export default ProductDetails;