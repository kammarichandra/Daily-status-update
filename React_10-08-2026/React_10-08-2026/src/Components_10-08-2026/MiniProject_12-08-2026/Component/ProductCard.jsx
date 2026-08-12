import { useContext } from "react";

import { CartContext } from './../Context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        width: "220px",
        textAlign: "center",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "200px",
          height: "150px",
          objectFit: "cover",
        }}
      />

      <h3>{product.name}</h3>

      <p>Category: {product.category}</p>

      <h4>₹{product.price}</h4>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;