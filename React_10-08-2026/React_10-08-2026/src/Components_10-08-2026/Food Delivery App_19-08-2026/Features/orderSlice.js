import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  loading: false,
  error: null,
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.orders.push(action.payload);
    },
    cancelOrder: (state, action) => {
      const order = state.orders.find((o) => o.id === action.payload);
      if (order) {
        order.status = "Cancelled";
      }
    },
    updateOrderStatus: (state, action) => {
      const order = state.orders.find((o) => o.id === action.payload.id);
      if (order) {
        order.status = action.payload.status;
      }
    },
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
  },
});

export const { addOrder, cancelOrder, updateOrderStatus, setOrders } =
  orderSlice.actions;

export default orderSlice.reducer;
