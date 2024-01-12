import axios from "axios";

const updatePet = () => {
    const endpoint = "https://petvogue.onrender.com/pets/put/"

    return async () => {
        try {
            await axios.put(endpoint);

        } catch (error) {
            console.log(error);
        }
    };
};

export default updatePet;