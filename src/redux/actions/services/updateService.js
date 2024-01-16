import axios from "axios";
import setServiceDetail from "../../slices/servicesSlice"

const updateService = (id) => {
    const endpoint = "https://petvogue.onrender.com/services/put/" + id

    return async () => {
        try {
            const response = await axios.put(endpoint);
            let data = response.data;

            console.log(data)

            return dispatch(setServiceDetail(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default updateService;