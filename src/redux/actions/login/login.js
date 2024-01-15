import axios from "axios";
import { setLogin } from "../../slices/loginSlice"

const login = () => {
    const endpoint = ""

    return async (dispatch) => {
        try {
            const response = await axios.post(endpoint);
            let data = response.data;

            console.log(data)

            return dispatch(setLogin(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default login;