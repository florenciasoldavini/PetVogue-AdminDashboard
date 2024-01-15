import axios from "axios";

const deleteAppointment = (id) => {
    const endpoint = "https://petvogue.onrender.com/appointments/delete/" + id

    return async () => {
        try {
            await axios.delete(endpoint);

        } catch (error) {
            console.log(error);
        }
    };
};

export default deleteAppointment;