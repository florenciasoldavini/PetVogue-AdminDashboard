import axios from "axios";

const updateAppointment = () => {
    const endpoint = "http://localhost:3001/appointments/put/"

    return async () => {
        try {
            await axios.put(endpoint);

        } catch (error) {
            console.log(error);
        }
    };
};

export default updateAppointment;