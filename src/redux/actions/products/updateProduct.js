import axios from "axios";

const updateProduct = () => {
    const endpoint = "https://petvogue.onrender.com/products/put/"

    return async () => {
        try {
            await axios.put(endpoint);

        } catch (error) {
            console.log(error);
        }
    };
};

export default updateProduct;