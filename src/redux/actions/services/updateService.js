import axios from "axios";

const updateService = () => {
    const endpoint = "https://petvogue.onrender.com/services/put/"

    return async () => {
        try {
            await axios.put(endpoint);

        } catch (error) {
            console.log(error);
        }
    };
};

export default updateService;