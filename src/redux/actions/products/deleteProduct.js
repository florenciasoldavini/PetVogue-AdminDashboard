import axios from "axios";

const deleteProduct = () => {
    const endpoint = "https://petvogue.onrender.com/products/delete/"

    return async () => {
        try {
            await axios.delete(endpoint);

        } catch (error) {
            console.log(error);
        }
    };
};

export default deleteProduct;