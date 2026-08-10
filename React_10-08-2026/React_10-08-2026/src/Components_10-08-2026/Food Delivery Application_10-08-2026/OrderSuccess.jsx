function OrderSuccess({ onNewOrder }) {

  return (

    <div className="success">

      <div className="success-icon"><i class="fa-solid fa-square-check"></i></div>

      <h2>Order Placed Successfully!</h2>

      <p> Thank you for ordering from QuickBite. </p>

      <p> Your food will be delivered soon. </p>

      <button onClick={onNewOrder}> Order More Food </button>

    </div>
  );
}

export default OrderSuccess;