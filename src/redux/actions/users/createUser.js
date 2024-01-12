import axios from "axios";

const createUser = () => {
    const endpoint = "https://petvogue.onrender.com/users/post/"

    return async () => {
        try {
            await axios.post(endpoint);

        } catch (error) {
            console.log(error);
        }
    };
};

export default createUser;