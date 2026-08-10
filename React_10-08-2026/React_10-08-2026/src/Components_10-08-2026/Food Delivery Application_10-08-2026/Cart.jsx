function Cart({ cart, onIncrease, onDecrease, onPlaceOrder,}) {

  let total = cart.reduce( (sum, item) => sum + item.price * item.quantity,0);

  return (

    <section className="cart">

      <h2><i className="fa-solid fa-cart-shopping"></i> Your Cart</h2>

      {cart.length === 0 ? (
        <p className="empty"> Your cart is empty. Add some delicious food! </p>

      ) : ( 
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <div>
                <strong>{item.name}</strong>
                <p><i class="fa-solid fa-indian-rupee-sign"></i>{item.price} each</p>
              </div>

              <div className="quantity">
                

                <button onClick={() => onDecrease(item.id)} > <i class="fa-solid fa-circle-plus"></i> </button>

                <span>{item.quantity}</span>

                <button onClick={() => onIncrease(item.id)}> + </button> 

              </div>

              <strong> <i class="fa-solid fa-indian-rupee-sign"></i>{item.price * item.quantity} </strong>

            </div>

          ))}

          <div className="cart-total">

            <h3>Total: <i class="fa-solid fa-indian-rupee-sign"></i>{total}</h3>

            <button className="order-button" onClick={onPlaceOrder} > Place Order </button>

          </div>
        </>
      )}
    </section>
  );
}

export default Cart;