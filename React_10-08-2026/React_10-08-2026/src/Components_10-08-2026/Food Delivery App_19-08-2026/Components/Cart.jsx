import { Link } from "react-router-dom";

import { useCart } from "../Context/CartContext";

import CartItem from "./CartItem";

function Cart() {
  let {cart, subtotal, deliveryFee, total, clearCart } = useCart();

  if (cart.length === 0) {

    return (
      <div>
        <h2>Your cart is empty 🛒</h2>

        <Link to="/"> Browse Restaurants </Link> 

      </div>
    );
  }

  return (
    <div>
      <h2>Your Cart</h2>

      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <hr />

      <p> Subtotal: {subtotal} </p>

      <p> Delivery: ₹{deliveryFee} </p>

      <h2> Total: ₹{total} </h2>

      <button onClick={clearCart}> Clear Cart </button>

      <Link to="/checkout">
        <button> Proceed to Checkout </button>
      </Link>
      
    </div>
  );
}

export default Cart;