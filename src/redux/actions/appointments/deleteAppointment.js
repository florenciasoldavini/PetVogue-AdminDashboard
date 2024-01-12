import axios from "axios";

const deleteAppointment = () => {
    const endpoint = "https://petvogue.onrender.com/appointments/delete/"

    return async () => {
        try {
            await axios.delete(endpoint);

        } catch (error) {
            console.log(error);
        }
    };
};

export default deleteAppointment;