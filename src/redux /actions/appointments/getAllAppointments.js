import axios from "axios";
import { setAllAppointments } from "../../slices/appointmentsSliceSlice"

const getAllAppointments = () => {
    const endpoint = "http://localhost:3001/api/orders/"

    return async (dispatch) => {
        try {
            const response = await axios.get(endpoint);
            let data = response.data;

            return dispatch(setAllAppointments(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default getAllAppointments;