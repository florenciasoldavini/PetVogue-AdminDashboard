import axios from "axios";
import setOrderDetail from "../../slices/ordersSlice"

const updateOrder = (id) => {
    const endpoint = "https://petvogue.onrender.com/orders/put/" + id

    return async () => {
        try {
            const response = await axios.put(endpoint);
            let data = response.data;

            console.log(data)

            return dispatch(setOrderDetail(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default updateOrder;