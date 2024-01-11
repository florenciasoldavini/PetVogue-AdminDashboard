import axios from "axios";
import { setAllAppointments } from "../../slices/appointmentsSlice"

const getAllAppointments = () => {
    const endpoint = "http://localhost:3001/bookings/get/"

    return async (dispatch) => {
        try {
            const response = await axios.post(endpoint);
            let data = response.data;

            return dispatch(setAllAppointments(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default getAllAppointments;