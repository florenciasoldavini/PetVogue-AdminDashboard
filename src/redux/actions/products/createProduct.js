import axios from "axios";

const createProduct = () => {
    const endpoint = "http://localhost:3001/products/post/"

    return async () => {
        try {
            await axios.post(endpoint);

        } catch (error) {
            console.log(error);
        }
    };
};

export default createProduct;