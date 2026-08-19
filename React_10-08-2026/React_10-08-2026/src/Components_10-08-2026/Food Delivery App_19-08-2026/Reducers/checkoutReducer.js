export const initialCheckoutState = {
  address: "",
  paymentMethod: "COD",
  coupon: "",
  discount: 0,
  status: "idle"
};

export function checkoutReducer(state, action) {
  switch (action.type) {
    case "SET_ADDRESS":
      return {
        ...state,
        address: action.payload
      };

    case "SET_PAYMENT":
      return {
        ...state,
        paymentMethod: action.payload
      };

    case "APPLY_COUPON":
      if (action.payload === "FOOD50") {
        return {
          ...state,
          coupon: action.payload,
          discount: 50
        };
      }

      return {
        ...state,
        coupon: action.payload,
        discount: 0
      };

    case "PLACE_ORDER":
      return {
        ...state,
        status: "success"
      };

    case "RESET":
      return initialCheckoutState;

    default:
      return state;
  }
}