import React from 'react'
import ProductCard from './ProductCard'

function ProductList({ products, onAddToCart }) {

    if(products.length === 0){
        return <h2 className="no-products">No products found.</h2>;

    }

  return (

     <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
    
  )
}

export default ProductList