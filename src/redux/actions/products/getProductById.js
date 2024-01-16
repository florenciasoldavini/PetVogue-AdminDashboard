import axios from "axios";
import { setProductDetail } from "../../slices/productsSlice"

const getProductById = (productID) => {
    const endpoint = "https://petvogue.onrender.com/products/get/" 

    return async (dispatch) => {
        try {
            const response = await axios.post(endpoint, {
                filters: {
                  productID_filter: productID,
                }
            });

            let data = response.data; 

            return dispatch(setProductDetail(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default getProductById;