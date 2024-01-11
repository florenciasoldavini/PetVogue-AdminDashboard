import axios from "axios";

const deleteOrder = () => {
    const endpoint = "http://localhost:3001/orders/delete/"

    return async () => {
        try {
            await axios.delete(endpoint);

        } catch (error) {
            console.log(error);
        }
    };
};

export default deleteOrder;