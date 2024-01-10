import axios from "axios";

const deleteService = () => {
    const endpoint = "http://localhost:3001/services/delete/"

    return async () => {
        try {
            await axios.delete(endpoint);

        } catch (error) {
            console.log(error);
        }
    };
};

export default deleteService;