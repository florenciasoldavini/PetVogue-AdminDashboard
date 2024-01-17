import axios from "axios";

const deleteUser = (id) => {
  const endpoint = "https://petvogue.onrender.com/users/delete/" + id;

  return async () => {
    try {
      await axios.delete(endpoint);
    } catch (error) {
      console.log(error);
      return error;
    }
  };
};

export default deleteUser;
