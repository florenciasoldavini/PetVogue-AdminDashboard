import axios from "axios";

const createAppointment = () => {
    const endpoint = "http://localhost:3001/appointments/post/"

    return async () => {
        try {
            await axios.post(endpoint);

        } catch (error) {
            console.log(error);
        }
    };
};

export default createAppointment;