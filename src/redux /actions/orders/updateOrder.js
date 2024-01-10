import axios from "axios";

const updateOrder = () => {
    const endpoint = "http://localhost:3001/orders/put/"

    return async () => {
        try {
            await axios.put(endpoint);

        } catch (error) {
            console.log(error);
        }
    };
};

export default updateOrder;