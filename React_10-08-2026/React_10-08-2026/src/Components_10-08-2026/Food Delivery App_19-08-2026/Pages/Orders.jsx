import { useSelector, useDispatch } from "react-redux";
import { cancelOrder } from "../Features/orderSlice";



function Orders() {
  const dispatch = useDispatch();

  const orders = useSelector(
    (state) => state.orders.orders
  );

  if (orders.length === 0) {
    return (
      <div>
        <h2>No orders yet</h2>
      </div>
    );
  }

  return (
    <div>
      <h1>My Orders</h1>

      {orders.map((order) => (
        <div
          key={order.id}
          className="order-card"
        >
          <h3>
            Order #{order.id}
          </h3>

          <p>
            Date: {order.createdAt}
          </p>

          <p>
            Status: <strong>
              {order.status}
            </strong>
          </p>

          <p>
            Payment: {order.paymentMethod}
          </p>

          <p>
            Address: {order.address}
          </p>

          <h3>
            Total: ₹{order.total}
          </h3>

          <h4>Items:</h4>

          {order.items.map((item) => (
            <p key={item.id}>
              {item.name} × {item.quantity}
            </p>
          ))}

          {order.status !== "Cancelled" && (
            <button
              onClick={() =>
                dispatch(
                  cancelOrder(order.id)
                )
              }
            >
              Cancel Order
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default Orders;