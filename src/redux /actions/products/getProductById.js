import axios from "axios";
import { setProductDetail } from "../../slices/productsSlice"

const getProductById = (id) => {
    const endpoint = "http://localhost:3001/products/get/" + id

    return async (dispatch) => {
        try {
            const response = await axios.get(endpoint);
            let data = response.data; 

            return dispatch(setProductDetail(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default getProductById;