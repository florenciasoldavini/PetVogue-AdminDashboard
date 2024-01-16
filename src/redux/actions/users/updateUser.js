import axios from "axios";

const updateUser = (userId, user) => {
    const endpoint = "https://petvogue.onrender.com/users/put/" + userId

    return async () => {
        try {
            await axios.put(endpoint, user);

        } catch (error) {
            console.log(error);
        }
    };
};

export default updateUser;