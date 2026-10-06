function ProductList({products,onSelect,onEdit,onDelete}) {

  return (
    <section className="product-section">

      <h2>Product List</h2>

      {products.length === 0 ? (
        <p className="empty">
          No products available.
        </p>
      ) : (
        <div className="product-grid">

          {products.map((product) => (
            <div className="product-card" key={product.id}>

              <h3>{product.name}</h3>

              <p>
                <strong>Price:</strong> ₹{product.price}
              </p>

              <p>
                <strong>Category:</strong> {product.category}
              </p>

              {/* Conditional Rendering */}

              {product.stock > 0 ? (
                <p className="available">
                  In Stock ({product.stock})
                </p>
              ) : (
                <p className="out">
                  Out of Stock
                </p>
              )}

              <div className="buttons">

                <button onClick={() => onSelect(product)}> View </button>

                <button onClick={() => onEdit(product)}> Edit </button>

                <button className="delete" onClick={() => onDelete(product.id)}> Delete </button>

              </div>

            </div>
          ))}

        </div>
      )}

    </section>
  );
}

export default ProductList;