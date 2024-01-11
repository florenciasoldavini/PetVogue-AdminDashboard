import axios from "axios";

const deleteAppointment = () => {
    const endpoint = "http://localhost:3001/appointments/delete/"

    return async () => {
        try {
            await axios.delete(endpoint);

        } catch (error) {
            console.log(error);
        }
    };
};

export default deleteAppointment;