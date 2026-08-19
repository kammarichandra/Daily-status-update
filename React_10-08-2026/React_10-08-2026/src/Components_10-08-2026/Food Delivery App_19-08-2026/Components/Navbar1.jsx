import { Link } from "react-router-dom";

import { useAuth } from "../Context/AuthContext";
import { useTheme } from "../Context/ThemeContext";
import { useCart } from "../Context/CartContext";

function Navbar() {

  const { user, logout } = useAuth();

  const { theme, toggleTheme } = useTheme();

  const { totalItems } = useCart();

  return (
    <nav className="navbar">

      <Link to="/">
        <h2>🍔 FoodExpress</h2>
      </Link>

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/cart">
          Cart ({totalItems})
        </Link>

        <Link to="/orders">
          Orders
        </Link>

        {user && (
          <Link to="/profile">
            {user.name}
          </Link>
        )}

        <button onClick={toggleTheme}>
          {theme === "light"
            ? "🌙"
            : "☀️"}
        </button>

        {user ? (
          <button onClick={logout}>
            Logout
          </button>
        ) : (
          <Link to="/login">
            Login
          </Link>
        )}

      </div>

    </nav>
  );
}

export default Navbar;