import axios from "axios";
import { setPetDetail } from "../../slices/petsSlice"

const getPetById = (petID) => {
    const endpoint = "https://petvogue.onrender.com/pets/get/" 

    return async (dispatch) => {
        try {
            const response = await axios.post(endpoint, {
                filters: {
                  petID_filter: petID,
                }
            });
            
            let data = response.data; 

            return dispatch(setPetDetail(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default getPetById;