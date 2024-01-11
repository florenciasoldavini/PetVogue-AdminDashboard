import axios from "axios";

const updateService = () => {
    const endpoint = "http://localhost:3001/services/put/"

    return async () => {
        try {
            await axios.put(endpoint);

        } catch (error) {
            console.log(error);
        }
    };
};

export default updateService;