import axios from "axios";

const updateProduct = (productID, formValues) => {
  const endpoint = "https://petvogue.onrender.com/products/update/" + productID;

  return async () => {
    try {
      await axios.put(endpoint, formValues);
    } catch (error) {
      console.log(error);
    }
  };
};

export default updateProduct;
