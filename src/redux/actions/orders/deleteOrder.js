import axios from "axios";

const deleteOrder = () => {
    const endpoint = "https://petvogue.onrender.com/orders/delete/"

    return async () => {
        try {
            await axios.delete(endpoint);

        } catch (error) {
            console.log(error);
        }
    };
};

export default deleteOrder;