import axios from "axios";
import { setUserDetail } from "../../slices/usersSlice"

const getUserById = (id) => {
    const endpoint = "http://localhost:3001/users/get/" + id

    return async (dispatch) => {
        try {
            const response = await axios.get(endpoint);
            let data = response.data; 

            return dispatch(setUserDetail(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default getUserById;