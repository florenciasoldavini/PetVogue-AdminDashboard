import axios from "axios";

const updateUser = (userID, userData) => {
  const endpoint = "https://petvogue.onrender.com";

  return async () => {
    try {
      await axios.put(`${endpoint}/users/update/${userID}`, userData);
    } catch (error) {
      console.log(error);
    }
  };
};

export default updateUser;
