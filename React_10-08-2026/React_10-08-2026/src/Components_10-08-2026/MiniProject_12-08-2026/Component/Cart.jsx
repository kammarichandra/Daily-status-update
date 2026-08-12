import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import CartItem from "./CartItem";

let Cart = () => {
  let { cart, clearCart } = useContext(CartContext);

  let totalPrice = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <div
      style={{
        padding: "20px",
        marginTop: "30px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
            />
          ))}

          <div style={{ marginTop: "20px" }}>
            <h2>Total: ₹{totalPrice}</h2>

            <button
              onClick={clearCart}
              style={{
                backgroundColor: "crimson",
                color: "white",
                padding: "10px 20px",
                border: "none",
              }}
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;