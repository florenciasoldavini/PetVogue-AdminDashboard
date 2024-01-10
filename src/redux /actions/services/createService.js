import axios from "axios";

const createService = () => {
    const endpoint = "http://localhost:3001/services/post/"

    return async () => {
        try {
            await axios.post(endpoint);

        } catch (error) {
            console.log(error);
        }
    };
};

export default createService;