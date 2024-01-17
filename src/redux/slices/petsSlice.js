import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allPets: null,
    petDetail: null
  }
  const petsSlice = createSlice({
    name: "pets",
    initialState,
    reducers: {
      setAllPets(state, action) {
        state.allPets = action.payload
      },
      setPetDetail(state, action) {
        state.petDetail = action.payload
      },
    },
  });
  
  export const { setAllPets, setPetDetail} = petsSlice.actions;
  export default petsSlice.reducer;