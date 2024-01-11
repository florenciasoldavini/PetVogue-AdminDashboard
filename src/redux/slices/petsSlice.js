import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allPets: null,
  }
  const petsSlice = createSlice({
    name: "pets",
    initialState,
    reducers: {
      setAllPets(state, action) {
        state.allPets = action.payload
      },
    },
  });
  
  export const { setAllPets} = petsSlice.actions;
  export default petsSlice.reducer;