import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allServices: null,
  }
  const servicesSlice = createSlice({
    name: "services",
    initialState,
    reducers: {
      setAllServices(state, action) {
        state.allServices = action.payload
      },
    },
  });
  
  export const { setAllServices} = servicesSlice.actions;
  export default servicesSlice.reducer;