import axios from "axios";

const createAppointment = () => {
    const endpoint = "https://petvogue.onrender.com/appointments/post/"

    return async () => {
        try {
            await axios.post(endpoint);

        } catch (error) {
            console.log(error);
        }
    };
};

export default createAppointment;