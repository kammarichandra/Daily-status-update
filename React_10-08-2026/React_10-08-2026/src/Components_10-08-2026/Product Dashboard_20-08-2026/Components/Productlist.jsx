import ProductCard from "./ProductCard";

function Productlist({
  products,
  onProductSelect,
}) {
  if (products.length === 0) {
    return <h2>No products found</h2>;
  }

  return (
    <div style={styles.grid}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onProductSelect={onProductSelect}
        />
      ))}
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "20px",
  },
};

export default Productlist;