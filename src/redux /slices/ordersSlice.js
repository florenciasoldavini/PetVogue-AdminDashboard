import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allOrders: null,
  }
  const ordersSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
      setAllOrders(state, action) {
        state.allOrders = action.payload
      },
    },
  });
  
  export const { setAllOrders} = ordersSlice.actions;
  export default ordersSlice.reducer;