import axios from "axios";
import { setAllUsers } from "../../slices/usersSlice"

const getAllUsers = () => {
    const endpoint = "https://petvogue.onrender.com/users/get/"

    return async (dispatch) => {
        try {
            const response = await axios.post(endpoint);
            let data = response.data;

            return dispatch(setAllUsers(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default getAllUsers;