import axios from "axios";

const deleteUser = () => {
    const endpoint = "http://localhost:3001/users/delete/"

    return async () => {
        try {
            await axios.delete(endpoint);

        } catch (error) {
            console.log(error);
        }
    };
};

export default deleteUser;