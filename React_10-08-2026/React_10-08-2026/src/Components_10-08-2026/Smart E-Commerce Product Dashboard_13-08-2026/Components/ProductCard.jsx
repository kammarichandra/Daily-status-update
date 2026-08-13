import React from "react";

let ProductCard = React.memo(function ProductCard({
  product,
  onAddToCart,
  onViewDetails,
}) {
  console.log("ProductCard rendered:", product.id);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />

      <h3>{product.title}</h3>

      <p className="category"> {product.category} </p>

      <p className="price"> ${product.price} </p>

      <div className="product-actions">
        
        <button onClick={() => onAddToCart(product)} > Add to Cart </button>

        <button className="details-btn" onClick={() => onViewDetails(product)} > Details </button>

      </div>
    </div>
  );
});

export default ProductCard;