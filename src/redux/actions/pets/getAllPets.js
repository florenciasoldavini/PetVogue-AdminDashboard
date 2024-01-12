import axios from "axios";
import { setAllPets } from "../../slices/petsSlice"

const getAllPets = () => {
    const endpoint = "https://petvogue.onrender.com/pets/get/"

    return async (dispatch) => {
        try {
            const response = await axios.post(endpoint);
            let data = response.data;

            return dispatch(setAllPets(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default getAllPets;