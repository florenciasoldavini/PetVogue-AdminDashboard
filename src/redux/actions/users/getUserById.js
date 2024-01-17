import axios from "axios";
import { setUserDetail } from "../../slices/usersSlice"

const getUserById = (userID) => {
    const endpoint = "https://petvogue.onrender.com/users/get/" 

    return async (dispatch) => {
        try {
            const response = await axios.post(endpoint, {
                filters: {
                  userID_filter: userID,
                }
            });

            let data = response.data; 

            return dispatch(setUserDetail(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default getUserById;