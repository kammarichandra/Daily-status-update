import {
  createContext,
  useContext,
  useReducer
} from "react";

import {
  CartReducer,
  initialCartState
} from "../Reducers/CartReducer";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(
    CartReducer,
    initialCartState
  );

  const addToCart = (food) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: food
    });
  };

  const removeFromCart = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id
    });
  };

  const increaseQuantity = (id) => {
    dispatch({
      type: "INCREASE_QUANTITY",
      payload: id
    });
  };

  const decreaseQuantity = (id) => {
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: id
    });
  };

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART"
    });
  };

  const totalItems = state.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const subtotal = state.items.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const deliveryFee = subtotal > 500 || subtotal === 0
    ? 0
    : 40;

  const total = subtotal + deliveryFee;

  return (
    <CartContext.Provider
      value={{
        cart: state.items,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        totalItems,
        subtotal,
        deliveryFee,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}