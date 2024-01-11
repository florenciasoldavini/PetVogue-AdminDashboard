import axios from "axios";
import { setAllServices } from "../../slices/servicesSlice"

const getAllServices = () => {
    const endpoint = "http://localhost:3001/services/get/"

    return async (dispatch) => {
        try {
            const response = await axios.post(endpoint);
            let data = response.data;

            return dispatch(setAllServices(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default getAllServices;