import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import {
  setSearchTerm,
  setCategory,
} from "../Redux/ProductsSlice";

const ProductList = () => {
  const dispatch = useDispatch();

  const {
    products,
    searchTerm,
    selectedCategory,
  } = useSelector((state) => state.products);

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ padding: "20px" }}>
      <h2>Products</h2>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) =>
            dispatch(setSearchTerm(e.target.value))
          }
          style={{
            padding: "10px",
            width: "250px",
          }}
        />

        <select
          value={selectedCategory}
          onChange={(e) =>
            dispatch(setCategory(e.target.value))
          }
          style={{
            padding: "10px",
            marginLeft: "10px",
          }}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;