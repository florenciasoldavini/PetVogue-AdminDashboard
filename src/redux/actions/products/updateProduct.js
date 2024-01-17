import axios from "axios";

const updateProduct = (productID, product) => {
    const endpoint = "https://petvogue.onrender.com/products/put/" + productID

    return async () => {
        try {
            await axios.put(endpoint, product);

        } catch (error) {
            console.log(error);
        }
    };
};

export default updateProduct;