import { setLogout } from "../../slices/loginSlice";

const logout = () => {
  return (dispatch) => {
    dispatch(setLogout());
  };
};

export default logout;
