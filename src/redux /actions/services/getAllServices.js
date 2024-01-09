import axios from "axios";
import { setAllServices } from "../../slices/servicesSlice"

const getAllServices = () => {
    const endpoint = "http://localhost:3001/api/orders/"

    return async (dispatch) => {
        try {
            const response = await axios.get(endpoint);
            let data = response.data;

            return dispatch(setAllServices(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default getAllServices;