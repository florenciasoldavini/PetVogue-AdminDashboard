import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allOrders: null,
    orderDetail: null
  }
  const ordersSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
      setAllOrders(state, action) {
        state.allOrders = action.payload
      },
      setOrderDetail(state, action) {
        state.orderDetail = action.payload
      },
    },
  });
  
  export const { setAllOrders, setOrderDetail} = ordersSlice.actions;
  export default ordersSlice.reducer;