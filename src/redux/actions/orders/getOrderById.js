import axios from "axios";
import { setOrderDetail } from "../../slices/ordersSlice"

const getOrderById = (id) => {
    const endpoint = "https://petvogue.onrender.com/orders/get/" + id

    return async (dispatch) => {
        try {
            const response = await axios.get(endpoint);
            let data = response.data; 

            return dispatch(setOrderDetail(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default getOrderById;