import axios from "axios";

const deleteProduct = () => {
    const endpoint = "http://localhost:3001/products/delete/"

    return async () => {
        try {
            await axios.delete(endpoint);

        } catch (error) {
            console.log(error);
        }
    };
};

export default deleteProduct;