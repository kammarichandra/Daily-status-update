import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import SearchBar from "../Components/SearchBar";
import Productlist from "../Components/Productlist";

function Products({ onProductSelect }) {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          "https://dummyjson.com/products"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        setProductsData(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter + Search + Sort
  const filteredProducts = useMemo(() => {
    console.log("Filtering products...");

    let result = productsData.filter((product) =>
      product.title
        .toLowerCase()
        .includes(search.toLowerCase())
    );

    // Category filter
    if (category !== "All") {
      result = result.filter(
        (product) =>
          product.category === category
      );
    }

    // Sort
    if (sort === "low") {
      result = [...result].sort(
        (a, b) => a.price - b.price
      );
    }

    if (sort === "high") {
      result = [...result].sort(
        (a, b) => b.price - a.price
      );
    }

    return result;
  }, [productsData, search, category, sort]);

  // useCallback
  const handleProductSelect = useCallback(
    (product) => {
      onProductSelect(product);
    },
    [onProductSelect]
  );

  // Loading
  if (loading) {
    return <h2>Loading products...</h2>;
  }

  // Error
  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      <h1>Products</h1>

      <p> Showing {filteredProducts.length} products </p>

      {/* Search */}
      <SearchBar
        search={search}
        onSearch={setSearch}
      />

      {/* Filters */}
      <div style={styles.filters}>
        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
          style={styles.select}
        >
          <option value="All">
            All Categories
          </option>

          <option value="beauty">
            Beauty
          </option>

          <option value="fragrances">
            Fragrances
          </option>

          <option value="furniture">
            Furniture
          </option>

          <option value="groceries">
            Groceries
          </option>
        </select>

        {/* Sorting */}
        <select
          value={sort}
          onChange={(e) =>
            setSort(e.target.value)
          }
          style={styles.select}
        >
          <option value="default">
            Sort By
          </option>

          <option value="low">
            Price: Low to High
          </option>

          <option value="high">
            Price: High to Low
          </option>
        </select>
      </div>

      {/* Products */}
      <Productlist
        products={filteredProducts}
        onProductSelect={handleProductSelect}
      />
    </div>
  );
}

const styles = {

  filters: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },

  select: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },

};

export default Products;