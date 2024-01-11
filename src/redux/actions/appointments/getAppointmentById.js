import axios from "axios";
import { setAppointmentDetail } from "../../slices/appointmentsSlice"

const getAppointmentById = (id) => {
    const endpoint = "http://localhost:3001/appointments/get/" + id

    return async (dispatch) => {
        try {
            const response = await axios.get(endpoint);
            let data = response.data; 

            return dispatch(setAppointmentDetail(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default getAppointmentById;