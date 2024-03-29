import axios from "axios";
import { setAllOrders } from "../../slices/ordersSlice"

const getAllOrders = () => {
    const endpoint = "https://petvogue.onrender.com/orders/get/"

    return async (dispatch) => {
        try {
            const response = await axios.post(endpoint);
            let data = response.data;

            console.log(data)

            return dispatch(setAllOrders(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default getAllOrders;