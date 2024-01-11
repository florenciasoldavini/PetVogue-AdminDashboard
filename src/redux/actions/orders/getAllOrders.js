import axios from "axios";
import { setAllOrders } from "../../slices/ordersSlice"

const getAllOrders = () => {
    const endpoint = "http://localhost:3001/orders/get/"

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