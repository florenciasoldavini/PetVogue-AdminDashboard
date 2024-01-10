import axios from "axios";

const createUser = () => {
    const endpoint = "http://localhost:3001/users/post/"

    return async () => {
        try {
            await axios.post(endpoint);

        } catch (error) {
            console.log(error);
        }
    };
};

export default createUser;