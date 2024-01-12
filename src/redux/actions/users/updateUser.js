import axios from "axios";

const updateUser = () => {
    const endpoint = "https://petvogue.onrender.com/users/put/"

    return async () => {
        try {
            await axios.put(endpoint);

        } catch (error) {
            console.log(error);
        }
    };
};

export default updateUser;