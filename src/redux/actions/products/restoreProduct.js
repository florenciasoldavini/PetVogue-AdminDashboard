import axios from "axios";

const restoreProduct = (id) => {
  const endpoint = "https://petvogue.onrender.com/products/restore/" + id;

  return async () => {
    try {
      await axios.patch(endpoint);
    } catch (error) {
      console.log(error);
      return error;
    }
  };
};

export default restoreProduct;
