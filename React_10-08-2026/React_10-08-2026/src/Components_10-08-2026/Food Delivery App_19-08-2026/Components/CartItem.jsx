import { useCart } from "../Context/CartContext";

function CartItem({ item }) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return (
    <div className="cart-item">
      <div>
        <h3>{item.name}</h3>

        <p>₹{item.price}</p>
      </div>

      <div>
        <button onClick={() => decreaseQuantity(item.id) } > - </button>

        <span>{item.quantity}</span>

        <button onClick={() => increaseQuantity(item.id) } > + </button>

      </div>

      <strong> ₹{item.price * item.quantity} </strong>

      <button onClick={() => removeFromCart(item.id) } > Remove </button>
      
    </div>
  );
}

export default CartItem;