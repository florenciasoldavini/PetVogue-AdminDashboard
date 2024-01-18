import axios from "axios";

const createProduct = (values) => {
    const endpoint = "https://petvogue.onrender.com/products/create/"

    return async () => {
        try {
            await axios.post(endpoint, values);

        } catch (error) {
            console.log(error);
        }
    };
};

export default createProduct;