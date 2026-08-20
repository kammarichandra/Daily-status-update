function ProductDetails({ product, onBack }) {
  if (!product) {
    return (
      <div>
        <h2>No product selected</h2>

        <button onClick={onBack}>
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={onBack} style={styles.backButton} >← Back to Products </button>

      <div style={styles.container}>
        <div style={styles.image}>
          🛍️
        </div>

        <div>
          <h1>{product.name}</h1>

          <p> Category: {product.category} </p>

          <h2> ₹{product.price.toLocaleString()} </h2>

          <p> {product.rating} / 5 </p>

          <p>
            This is a high-quality {product.name}.
            It is one of our popular products.
          </p>

          <button style={styles.cartButton}> Add to Cart </button>
          
        </div>
      </div>
    </div>
  );
}

const styles = {
  backButton: {
    padding: "10px 15px",
    marginBottom: "30px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },

  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
    alignItems: "center",
  },

  image: {
    height: "350px",
    background: "#f3f4f6",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "100px",
    borderRadius: "10px",
  },

  cartButton: {
    padding: "12px 25px",
    background: "#16a34a",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default ProductDetails;