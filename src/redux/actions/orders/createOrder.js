import axios from "axios";

const createOrder = () => {
    const endpoint = "http://localhost:3001/orders/post/"

    return async () => {
        try {
            await axios.post(endpoint);

        } catch (error) {
            console.log(error);
        }
    };
};

export default createOrder;