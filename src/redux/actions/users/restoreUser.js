import axios from "axios";

const restoreUser = (id) => {
  const endpoint = "https://petvogue.onrender.com/users/restore/" + id;

  return async () => {
    try {
      await axios.patch(endpoint);
    } catch (error) {
      console.log(error);
    }
  };
};

export default restoreUser;
