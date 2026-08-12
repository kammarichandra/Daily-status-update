import { createContext, useReducer } from "react";
import cartReducer from "../Reducer/CartReducer";

export let CartContext = createContext();

let initialState = {
  cart: [],
};

export let CartProvider = ({ children }) => {

  let [state, dispatch] = useReducer(cartReducer, initialState);

  let addToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  let removeFromCart = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
  };

  let increaseQuantity = (id) => {
    dispatch({
      type: "INCREASE_QUANTITY",
      payload: id,
    });
  };

  let decreaseQuantity = (id) => {
    
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: id,
    });
  };

  let clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};