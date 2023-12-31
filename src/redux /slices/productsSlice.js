import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allProducts: null,
  }
  const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
      setAllProducts(state, action) {
        state.allProducts = action.payload
      },
    },
  });
  
  export const { setAllProducts} = productsSlice.actions;
  export default productsSlice.reducer;