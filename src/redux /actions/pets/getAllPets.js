import axios from "axios";
import { setAllPets } from "../../slices/petsSlice"

const getAllPets = () => {
    const endpoint = "http://localhost:3001/pets/get/"

    return async (dispatch) => {
        try {
            const response = await axios.get(endpoint);
            let data = response.data;

            return dispatch(setAllPets(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default getAllPets;