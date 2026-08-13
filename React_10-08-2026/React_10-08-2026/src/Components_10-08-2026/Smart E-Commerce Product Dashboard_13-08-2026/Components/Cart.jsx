import React from "react";

const Cart = React.memo(function Cart({
  cart,
  totalItems,
  cartTotal,
  onRemove,
  onIncrease,
  onDecrease,
}) {
  return (
    <div className="cart">
      <h2>
        🛒 Cart ({totalItems})
      </h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id} >
              <img src={item.image} alt={item.title} />

              <div className="cart-info">
                <h4>{item.title}</h4>

                <p> ${item.price} </p>

                <div className="quantity">
                  <button onClick={() => onDecrease(item.id) } > - </button>

                  <span> {item.quantity} </span>

                  <button onClick={() => onIncrease(item.id) }> + </button> 
                </div>

                <button className="remove" onClick={() => onRemove(item.id) } > Remove </button>
              </div>
            </div>
          ))}

          <hr />

          <h3>
            Total: ${cartTotal.toFixed(2)}
          </h3>
        </>
      )}
    </div>
  );
});

export default Cart;