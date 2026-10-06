import React, { useState } from 'react'
import ProductList from './Components/ProductList';
import ProductDetails from './Components/ProductDetails';
import ProductForm from './Components/ProductForm';

function Products() {

    let [Products, setProducts] = useState([
        {
            id: 1,
            name: "Laptop",
            price: 55000,
            category: "Electronics",
            stock: 10,
            description: "High-performance laptop for work and development."
        },
        {
            id: 2,
            name: "Smart Phone",
            price: 25000,
            category: "Electronics",
            stock: 5,
            description: "Modern smartphone with excellent camera."
        },
        {
            id: 3,
            name: "Headphones",
            price: 2500,
            category: "Accessories",
            stock: 0,
            description: "Wireless noise-cancelling headphones."
        }
    ])

    let [SelectProduct, setSelectProduct] = useState(null);
    let [editingProduct, setEditingProduct] = useState(null);
    let [showform, setShowform] = useState(false);

    let addProduct = (product) => {
        let newProduct = {
            ...product,
            id: Date.now()
        }

        setProducts([...Products, newProduct]);
        setShowform(false);
    };

    // Edit Product
    const updateProduct = (updatedProduct) => {
        setProducts(
            Products.map((product) =>
                product.id === updatedProduct.id ? updatedProduct : product
            )
        );

        setEditingProduct(null);
        setShowform(false);
    };

    // Delete Product
    const deleteProduct = (id) => {
        setProducts(products.filter((product) => product.id !== id));

        if (SelectProduct?.id === id) {
            setSelectProduct(null);
        }
    };
    return (
         <div className="app">

      <header>
        <h1>Product Management</h1>

        <button
          className="add-btn"
          onClick={() => {
            setEditingProduct(null);
            setShowform(true);
          }}
        >
          + Add Product
        </button>
      </header>

      <main>

        {/* Conditional Display */}
        {showform ? (
          <ProductForm
            product={editingProduct}
            onAdd={addProduct}
            onUpdate={updateProduct}
            onCancel={() => setShowform(false)}
          />
        ) : (
          <>
            <ProductList
              products={Products}
              onSelect={setSelectProduct}
              onEdit={(product) => {
                setEditingProduct(product);
                setShowform(true);
              }}
              onDelete={deleteProduct}
            />

            {SelectProduct && (
              <ProductDetails product={SelectProduct} />
            )}
          </>
        )}

      </main>
    </div>
    )
}

export default Products