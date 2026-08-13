function ProductDetails({
  product,
  onClose,
  onAddToCart,
}) {
  if (!product) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="details-modal">
        <button
          className="close-btn"
          onClick={onClose}
        >
          ✕
        </button>

        <img
          src={product.image}
          alt={product.title}
        />

        <div>
          <h2>{product.title}</h2>

          <p className="category">
            {product.category}
          </p>

          <h3>${product.price}</h3>

          <p>{product.description}</p>

          <p>
            ⭐ {product.rating?.rate} (
            {product.rating?.count} reviews)
          </p>

          <button
            onClick={() =>
              onAddToCart(product)
            }
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;