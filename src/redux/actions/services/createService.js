import axios from "axios";

const createService = () => {
    const endpoint = "https://petvogue.onrender.com/services/post/"

    return async () => {
        try {
            await axios.post(endpoint);

        } catch (error) {
            console.log(error);
        }
    };
};

export default createService;