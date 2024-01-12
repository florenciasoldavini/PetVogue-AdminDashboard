import axios from "axios";

const createProduct = () => {
    const endpoint = "https://petvogue.onrender.com/products/post/"

    return async () => {
        try {
            await axios.post(endpoint);

        } catch (error) {
            console.log(error);
        }
    };
};

export default createProduct;