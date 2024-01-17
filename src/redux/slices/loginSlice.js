import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: {},
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogin(state, action) {
      state.login = action.payload;
    },
    setLogout(state, action) {
      state.login = {};
    },
  },
});

export const { setLogin, setLogout } = loginSlice.actions;
export default loginSlice.reducer;
