import React from "react";
import ProductCard from "./ProductCard";

const Productlist = React.memo(function ProductList({
  products,
  onAddToCart,
  onViewDetails,
}) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
});

export default Productlist;