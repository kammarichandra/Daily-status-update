import React from "react";

const ProductCard = React.memo(function ProductCard({
  product,
  onProductSelect,
}) {
  return (
    <div style={styles.card}>
      <img
        src={product.thumbnail}
        alt={product.title}
        style={styles.image}
      />

      <h3>{product.title}</h3>

      <p style={styles.category}>
        {product.category}
      </p>

      <p>
        <i class="fa-solid fa-star"></i> {product.rating}
      </p>

      <h3>₹{product.price}</h3>

      <p>
        Stock: {product.stock}
      </p>

      <button
        onClick={() => onProductSelect(product)}
        style={styles.button}
      >
        View Details
      </button>
    </div>
  );
});

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    background: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },

  image: {
    width: "100%",
    height: "200px",
    objectFit: "contain",
    borderRadius: "8px",
    background: "#f5f5f5",
  },

  category: {
    color: "#666",
    textTransform: "capitalize",
  },

  button: {
    width: "100%",
    padding: "10px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default ProductCard;