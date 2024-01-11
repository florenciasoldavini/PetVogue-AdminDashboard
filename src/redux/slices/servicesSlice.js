import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allServices: null,
    serviceDetail: null
  }
  const servicesSlice = createSlice({
    name: "services",
    initialState,
    reducers: {
      setAllServices(state, action) {
        state.allServices = action.payload
      },
      setServiceDetail(state, action) {
        state.serviceDetail = action.payload
      },
    },
  });
  
  export const { setAllServices, setServiceDetail} = servicesSlice.actions;
  export default servicesSlice.reducer;