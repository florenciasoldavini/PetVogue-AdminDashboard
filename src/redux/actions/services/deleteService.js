import axios from "axios";

const deleteService = (id) => {
    const endpoint = "https://petvogue.onrender.com/services/delete/" + id

    return async () => {
        try {
            await axios.delete(endpoint);

        } catch (error) {
            console.log(error);
        }
    };
};

export default deleteService;