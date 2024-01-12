import axios from "axios";

const deleteService = () => {
    const endpoint = "https://petvogue.onrender.com/services/delete/"

    return async () => {
        try {
            await axios.delete(endpoint);

        } catch (error) {
            console.log(error);
        }
    };
};

export default deleteService;