import axios from "axios";
import { setAllProducts } from "../../slices/productsSlice"

const getAllProducts = () => {
    const endpoint = "http://localhost:3001/products/get/"

    return async (dispatch) => {
        try {
            const response = await axios.post(endpoint);
            let data = response.data;

            return dispatch(setAllProducts(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default getAllProducts;