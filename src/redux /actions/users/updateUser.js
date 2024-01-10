import axios from "axios";

const updateUser = () => {
    const endpoint = "http://localhost:3001/users/put/"

    return async () => {
        try {
            await axios.put(endpoint);

        } catch (error) {
            console.log(error);
        }
    };
};

export default updateUser;