import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allProducts: null,
    productDetail: null
  }
  const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
      setAllProducts(state, action) {
        state.allProducts = action.payload
      },
      setProductDetail(state, action) {
        state.productDetail = action.payload
      },
    },
  });
  
  export const { setAllProducts, setProductDetail} = productsSlice.actions;
  export default productsSlice.reducer;