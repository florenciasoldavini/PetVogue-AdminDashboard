import axios from "axios";

const updateService = (serviceID, service) => {
    const endpoint = "https://petvogue.onrender.com/services/put/" + serviceID

    return async () => {
        try {
            await axios.put(endpoint, service);

        } catch (error) {
            console.log(error);
        }
    };
};

export default updateService;