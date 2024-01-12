import axios from "axios";

const deleteUser = () => {
    const endpoint = "https://petvogue.onrender.com/users/delete/"

    return async () => {
        try {
            await axios.delete(endpoint);

        } catch (error) {
            console.log(error);
        }
    };
};

export default deleteUser;