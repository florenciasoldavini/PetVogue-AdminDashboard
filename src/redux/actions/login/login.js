import axios from "axios";
import { setLogin } from "../../slices/loginSlice";

const login = (userData) => {
  const endpoint = "https://petvogue.onrender.com/users/admin/login";

  return async (dispatch) => {
    try {
      const response = await axios.post(endpoint, userData);
      let data = response.data;

      console.log(data);

      return dispatch(setLogin(data));
    } catch (error) {
      return error;
    }
  };
};

export default login;
