import axios from "axios";

const updateProduct = (productID, productData) => {
  const endpoint = "https://petvogue.onrender.com";

  return async () => {
    try {
      await axios.put(`${endpoint}/products/update/${productID}`, productData);
    } catch (error) {
      console.log(error);
    }
  };
};

export default updateProduct;
