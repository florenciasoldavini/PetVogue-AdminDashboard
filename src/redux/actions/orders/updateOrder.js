import axios from "axios";

const updateOrder = () => {
    const endpoint = "https://petvogue.onrender.com/orders/put/"

    return async () => {
        try {
            await axios.put(endpoint);

        } catch (error) {
            console.log(error);
        }
    };
};

export default updateOrder;