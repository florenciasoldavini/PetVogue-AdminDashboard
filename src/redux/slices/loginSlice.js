import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login: null,
  }
  const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
      setLogin(state, action) {
        state.login = action.payload
      },
    },
  });
  
  export const { setLogin} = loginSlice.actions;
  export default loginSlice.reducer;