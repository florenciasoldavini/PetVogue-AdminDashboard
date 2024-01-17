import axios from "axios";

const updateOrder = (orderID, order) => {
    const endpoint = "https://petvogue.onrender.com/orders/put/" + orderID

    return async () => {
        try {
            await axios.put(endpoint, order);
     
        } catch (error) {
            console.log(error);
        }
    };
};

export default updateOrder;