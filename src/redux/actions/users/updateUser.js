import axios from "axios";
import setUserDetail from "../../slices/usersSlice"

const updateUser = (id) => {
    const endpoint = "https://petvogue.onrender.com/users/put/" + id

    return async () => {
        try {
            const response = await axios.put(endpoint);
            let data = response.data;

            console.log(data)

            return dispatch(setUserDetail(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default updateUser;