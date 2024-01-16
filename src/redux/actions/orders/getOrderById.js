import axios from "axios";
import { setOrderDetail } from "../../slices/ordersSlice"

const getOrderById = (orderID) => {
    const endpoint = "https://petvogue.onrender.com/orders/get/" 

    return async (dispatch) => {
        try {
            const response = await axios.post(endpoint, {
                filters: {
                  orderID_filter: orderID,
                }
            });

            let data = response.data; 

            return dispatch(setOrderDetail(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default getOrderById;