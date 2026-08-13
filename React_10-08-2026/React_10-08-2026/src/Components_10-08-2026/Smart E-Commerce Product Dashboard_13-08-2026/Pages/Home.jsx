import {
  lazy,
  Suspense,
  useCallback,
  useMemo,
  useState,
} from "react";
import Searchbar from "../Components/Searchbar";
import CategoryFilter from "../Components/CategoryFilter";
import Productlist from "../Components/Productlist";
import Cart from "../Components/Cart";
import { useCart } from "../Hooks/UseCart";
import UseProducts from './../Hooks/UseProducts';
// Lazy Loading
let ProductDetails = lazy( () => import("./ProductDetails"));


function Home() {
  let {
    products,
    loading,
    error,
  } = UseProducts();

  let {
    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalItems,
    cartTotal,
  } = useCart();

  let [search, setSearch] = useState("");
  let [category, setCategory] =
    useState("All");
  let [sort, setSort] =
    useState("default");

  let [selectedProduct, setSelectedProduct] =
    useState(null);

  // useMemo
  let categories = useMemo(() => {
    return [
      ...new Set(
        products.map(
          (product) => product.category
        )
      ),
    ];
  }, [products]);

  // useMemo
  let filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      let matchesSearch =
        product.title
          .toLowerCase()
          .includes(search.toLowerCase());

      let matchesCategory =
        category === "All" ||
        product.category === category;

      return (
        matchesSearch && matchesCategory
      );
    });

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
  }, [
    products,
    search,
    category,
    sort,
  ]);

  // useCallback
  let handleSearchChange = useCallback(
    (value) => {
      setSearch(value);
    },
    []
  );

  // useCallback
  let handleCategoryChange =
    useCallback((value) => {
      setCategory(value);
    }, []);

  // useCallback
  let handleSortChange = useCallback(
    (value) => {
      setSort(value);
    },
    []
  );

  // useCallback
  let handleViewDetails = useCallback(
    (product) => {
      setSelectedProduct(product);
    },
    []
  );

  // useCallback
  let handleCloseDetails =
    useCallback(() => {
      setSelectedProduct(null);
    }, []);

  if (loading) {
    return (
      <div className="loading">
        Loading products...
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="app">
      <header>
        <h1>🛒 Smart Store</h1>

        <div className="cart-count">
          Cart: {totalItems}
        </div>
      </header>

      <main>
        <section className="controls">
          <Searchbar
            search={search}
            onSearchChange={
              handleSearchChange
            }
          />

          <CategoryFilter
            categories={categories}
            selectedCategory={category}
            onCategoryChange={
              handleCategoryChange
            }
            sort={sort}
            onSortChange={
              handleSortChange
            }
          />
        </section>

        <section>
          <h2>
            Products ({filteredProducts.length})
          </h2>

          <Productlist
            products={filteredProducts}
            onAddToCart={addToCart}
            onViewDetails={
              handleViewDetails
            }
          />
        </section>

        <Cart
          cart={cart}
          totalItems={totalItems}
          cartTotal={cartTotal}
          onRemove={removeFromCart}
          onIncrease={increaseQuantity}
          onDecrease={decreaseQuantity}
        />
      </main>

      {/* Lazy Loaded Component */}
      {selectedProduct && (
        <Suspense
          fallback={
            <div className="loading">
              Loading details...
            </div>
          }
        >
          <ProductDetails
            product={selectedProduct}
            onClose={
              handleCloseDetails
            }
            onAddToCart={addToCart}
          />
        </Suspense>
      )}
    </div>
  );
}

export default Home;