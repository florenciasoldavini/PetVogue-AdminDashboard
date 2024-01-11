import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allAppointments: null,
  }
  const appointmentsSlice = createSlice({
    name: "appointments",
    initialState,
    reducers: {
      setAllAppointments(state, action) {
        state.allAppointments = action.payload
      },
    },
  });
  
  export const { setAllAppointments} = appointmentsSlice.actions;
  export default appointmentsSlice.reducer;