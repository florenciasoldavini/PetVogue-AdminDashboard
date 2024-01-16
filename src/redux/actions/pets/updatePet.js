import axios from "axios";
import setPetDetail from "../../slices/petsSlice"


const updatePet = (id) => {
    const endpoint = "https://petvogue.onrender.com/pets/put/" + id

    return async () => {
        try {
            const response = await axios.put(endpoint);
            let data = response.data;

            console.log(data)

            return dispatch(setPetDetail(data));
        } catch (error) {
            console.log(error);
        }
    };
};

export default updatePet;