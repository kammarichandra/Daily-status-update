import { useReducer } from "react";

import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import { addOrder } from "../Features/orderSlice";

import { useCart } from "../Context/CartContext";

import { checkoutReducer, initialCheckoutState } from "../Reducers/checkoutReducer";

function Checkout() {

  const navigate = useNavigate();

  const reduxDispatch = useDispatch();

  const { cart, total, clearCart } = useCart();

  const [ state, dispatch ] = useReducer( checkoutReducer, initialCheckoutState );

  const handlePlaceOrder = () => {
    if (!state.address) {
      alert("Please enter your address");
      return;
    }

    const order = {
      id: Date.now(),
      items: cart,
      total:
        total - state.discount,
      address: state.address,
      paymentMethod:
        state.paymentMethod,
      status: "Preparing",
      createdAt:
        new Date().toLocaleString()
    };

    reduxDispatch( addOrder(order) );

    dispatch({ type: "PLACE_ORDER" });

    clearCart();

    navigate("/orders");
  };

  return (
    <div>
      <h1>Checkout</h1>

      <h3>Delivery Address</h3>

      <textarea value={state.address} onChange={(e) =>
          dispatch({
            type: "SET_ADDRESS",
            payload: e.target.value
          })
        }
        placeholder="Enter your delivery address"
      />

      <h3>Payment Method</h3>

      <select
        value={state.paymentMethod}
        onChange={(e) =>
          dispatch({
            type: "SET_PAYMENT",
            payload: e.target.value
          })
        }
      >
        <option value="COD">
          Cash on Delivery
        </option>

        <option value="UPI">
          UPI
        </option>

        <option value="CARD">
          Card
        </option>
      </select>

      <h3>Coupon</h3>

      <input
        value={state.coupon}
        onChange={(e) =>
          dispatch({
            type: "APPLY_COUPON",
            payload: e.target.value
          })
        }
        placeholder="Try FOOD50"
      />

      {state.discount > 0 && (
        <p>
          Discount: ₹{state.discount}
        </p>
      )}

      <h2> Final Total: ₹ {total - state.discount} </h2>

      <button onClick={handlePlaceOrder}> Place Order </button>
      
    </div>
  );
}

export default Checkout;