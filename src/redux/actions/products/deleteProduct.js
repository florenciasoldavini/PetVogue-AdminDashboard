import axios from "axios";

const deleteProduct = (id) => {
  const endpoint = "https://petvogue.onrender.com/products/delete/" + id;

  return async () => {
    try {
      await axios.delete(endpoint);
    } catch (error) {
      console.log(error);
      return error;
    }
  };
};

export default deleteProduct;
