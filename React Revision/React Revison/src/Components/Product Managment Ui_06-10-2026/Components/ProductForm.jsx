import { useState } from "react";

function ProductForm({
  product,
  onAdd,
  onUpdate,
  onCancel
}) {
  const [formData, setFormData] = useState(
    product || {
      name: "",
      price: "",
      category: "",
      stock: "",
      description: ""
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.price ||
      !formData.category
    ) {
      alert("Please fill all required fields");
      return;
    }

    const productData = {
      ...formData,
      price: Number(formData.price),
      stock: Number(formData.stock)
    };

    if (product) {
      onUpdate(productData);
    } else {
      onAdd(productData);
    }
  };

  return (
    <section className="form-section">

      <h2>
        {product ? "Edit Product" : "Add Product"}
      </h2>

      <form onSubmit={handleSubmit}>

        <label>Product Name</label>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter product name"
        />

        <label>Price</label>

        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Enter price"
        />

        <label>Category</label>

        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Enter category"
        />

        <label>Stock</label>

        <input
          type="number"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          placeholder="Enter stock"
        />

        <label>Description</label>

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter product description"
        />

        <div className="form-buttons">

          <button type="submit">
            {product ? "Update Product" : "Add Product"}
          </button>

          <button
            type="button"
            className="cancel"
            onClick={onCancel}
          >
            Cancel
          </button>

        </div>

      </form>

    </section>
  );
}

export default ProductForm;