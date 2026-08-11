function Cart({ cart, onRemoveFromCart }) {

  let total = cart.reduce( (sum, product) => sum + product.price , 0 );

  return (

    <div className="cart">
      <h2><i class="fa-solid fa-cart-shopping"></i> Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>

          {cart.map((product, index) => (

            <div className="cart-item" key={`${product.id}-${index}`}>

              <div>
                <h4>{product.title}</h4>
                <p>${product.price}</p>
              </div>

              <button onClick={() => onRemoveFromCart(index)}> Remove </button>

            </div>

          ))}

          <hr />

          <h3>Total: ${total.toFixed(2)}</h3>
          
        </>
      )}
    </div>
  );
}

export default Cart;