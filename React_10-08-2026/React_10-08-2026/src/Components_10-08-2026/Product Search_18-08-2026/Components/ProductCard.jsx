import React from 'react'

function ProductCard({product}) {

  return (

    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} width="200" />

      <h3>{product.title}</h3>

      <p> Category: {product.category} </p>

      <p> Price: ${product.price} </p>

      <p> Rating: {product.rating} </p>

      <p> Stock: {product.stock} </p>

      <button> View Details </button>

    </div>

  )
}

export default ProductCard