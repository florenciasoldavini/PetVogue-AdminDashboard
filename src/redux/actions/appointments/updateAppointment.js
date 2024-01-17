import axios from "axios";

const updateAppointment = (appointmentID, appointment) => {
    const endpoint = "https://petvogue.onrender.com/appointments/put/" + appointmentID

    return async () => {
        try {
            await axios.put(endpoint, appointment);

        } catch (error) {
            console.log(error);
        }
    };
};

export default updateAppointment;