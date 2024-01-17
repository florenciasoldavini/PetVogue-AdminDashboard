import axios from "axios";
import { setAppointmentDetail } from "../../slices/appointmentsSlice"

const getAppointmentById = (appointmentID) => {
    const endpoint = "https://petvogue.onrender.com/appointments/get/" 

    return async (dispatch) => {
        try {
            const response = await axios.post(endpoint, {
                filters: {
                  appointmentID_filter: appointmentID,
                }
            });
            let data = response.data; 

            return dispatch(setAppointmentDetail(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default getAppointmentById;