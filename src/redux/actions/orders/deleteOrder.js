import axios from "axios";

const deleteOrder = (id) => {
    const endpoint = "https://petvogue.onrender.com/orders/delete/" + id

    return async () => {
        try {
            await axios.delete(endpoint);

        } catch (error) {
            console.log(error);
        }
    };
};

export default deleteOrder;