import axios from "axios";
import setProductDetail from "../../slices/productsSlice"

const updateProduct = (id) => {
    const endpoint = "https://petvogue.onrender.com/products/put/" + id

    return async (dispatch) => {
        try {
            const response = await axios.put(endpoint);
            let data = response.data;

            console.log(data)

            return dispatch(setProductDetail(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default updateProduct;