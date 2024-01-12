import axios from "axios";

const createOrder = () => {
    const endpoint = "https://petvogue.onrender.com/orders/post/"

    return async () => {
        try {
            await axios.post(endpoint);

        } catch (error) {
            console.log(error);
        }
    };
};

export default createOrder;