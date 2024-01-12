import axios from "axios";

const updateAppointment = () => {
    const endpoint = "https://petvogue.onrender.com/appointments/put/"

    return async () => {
        try {
            await axios.put(endpoint);

        } catch (error) {
            console.log(error);
        }
    };
};

export default updateAppointment;