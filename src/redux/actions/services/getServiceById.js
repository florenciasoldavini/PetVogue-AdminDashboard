import axios from "axios";
import { setServiceDetail } from "../../slices/servicesSlice"

const getServiceById = (id) => {
    const endpoint = "https://petvogue.onrender.com/services/get/" + id

    return async (dispatch) => {
        try {
            const response = await axios.get(endpoint);
            let data = response.data; 

            return dispatch(setServiceDetail(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default getServiceById;