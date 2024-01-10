import axios from "axios";

const updateProduct = () => {
    const endpoint = "http://localhost:3001/products/put/"

    return async () => {
        try {
            await axios.put(endpoint);

        } catch (error) {
            console.log(error);
        }
    };
};

export default updateProduct;