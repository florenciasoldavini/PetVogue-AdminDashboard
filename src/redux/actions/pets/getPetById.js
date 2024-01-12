import axios from "axios";
import { setPetDetail } from "../../slices/petsSlice"

const getPetById = (id) => {
    const endpoint = "https://petvogue.onrender.com/pets/get/" + id

    return async (dispatch) => {
        try {
            const response = await axios.get(endpoint);
            let data = response.data; 

            return dispatch(setPetDetail(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default getPetById;