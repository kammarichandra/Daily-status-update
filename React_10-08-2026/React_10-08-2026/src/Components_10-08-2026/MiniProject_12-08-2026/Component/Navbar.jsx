import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#222",
        color: "white",
      }}
    >
      <h2>My Shop</h2>

      <h3>🛒 Cart: {totalItems}</h3>
    </nav>
  );
};

export default Navbar;