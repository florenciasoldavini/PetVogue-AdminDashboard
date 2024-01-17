import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allAppointments: null,
    appointmentDetail: null
  }
  const appointmentsSlice = createSlice({
    name: "appointments",
    initialState,
    reducers: {
      setAllAppointments(state, action) {
        state.allAppointments = action.payload
      },
      setAppointmentDetail(state, action) {
        state.appointmentDetail = action.payload
      },
    },
  });
  
  export const { setAllAppointments, setAppointmentDetail} = appointmentsSlice.actions;
  export default appointmentsSlice.reducer;