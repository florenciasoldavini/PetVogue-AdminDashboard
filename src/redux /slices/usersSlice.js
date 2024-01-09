import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allUsers: null,
  }
  const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
      setAllUsers(state, action) {
        state.allUsers = action.payload
      },
    },
  });
  
  export const { setAllUsers} = usersSlice.actions;
  export default usersSlice.reducer;