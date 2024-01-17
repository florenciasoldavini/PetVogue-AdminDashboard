import axios from "axios";
import { setServiceDetail } from "../../slices/servicesSlice"

const getServiceById = (serviceID) => {
    const endpoint = "https://petvogue.onrender.com/services/get/" 

    return async (dispatch) => {
        try {
            const response = await axios.post(endpoint, {
                filters: {
                  serviceID_filter: serviceID,
                }
            });

            let data = response.data; 

            return dispatch(setServiceDetail(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default getServiceById;