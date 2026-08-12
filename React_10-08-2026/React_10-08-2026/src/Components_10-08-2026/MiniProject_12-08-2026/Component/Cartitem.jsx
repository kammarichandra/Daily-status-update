import { useContext } from "react";

import { CartContext } from './../Context/CartContext';

let CartItem = ({ item }) => {
  let {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useContext(CartContext);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #ddd",
        padding: "15px",
      }}
    >
      <div>
        <h3>{item.name}</h3>
        <p>₹{item.price}</p>
      </div>

      <div>
        <button
          onClick={() => decreaseQuantity(item.id)}
        >
          -
        </button>

        <span style={{ margin: "0 15px" }}>
          {item.quantity}
        </span>

        <button
          onClick={() => increaseQuantity(item.id)}
        >
          +
        </button>
      </div>

      <div>
        <p>
          ₹{item.price * item.quantity}
        </p>

        <button
          onClick={() => removeFromCart(item.id)}
          style={{
            backgroundColor: "red",
            color: "white",
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;