import { Link } from "react-router-dom";

function Products() {
  return (
    <div>

      <h1>Our Products</h1>

      <div>

        <h3>CRM Software</h3>

        <Link to="/products/101">
          View Details
        </Link>

      </div>

      <div>

        <h3>HR Management</h3>

        <Link to="/products/102">
          View Details
        </Link>

      </div>

      <div>

        <h3>Inventory System</h3>

        <Link to="/products/103">
          View Details
        </Link>

      </div>

      <div>

        <h3>ERP Solution</h3>

        <Link to="/products/104">
          View Details
        </Link>

      </div>

    </div>
  );
}

export default Products;