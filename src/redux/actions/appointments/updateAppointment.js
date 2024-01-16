import axios from "axios";
import setAppointmentDetail from "../../slices/appointmentsSlice"

const updateAppointment = (id) => {
    const endpoint = "https://petvogue.onrender.com/appointments/put/" + id
    return async (dispatch) => {
        try {
            const response = await axios.put(endpoint);
            let data = response.data;

            console.log(data)

            return dispatch(setAppointmentDetail(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default updateAppointment;