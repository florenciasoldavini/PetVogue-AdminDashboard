import axios from "axios";

const updatePet = () => {
    const endpoint = "http://localhost:3001/pets/put/"

    return async () => {
        try {
            await axios.put(endpoint);

        } catch (error) {
            console.log(error);
        }
    };
};

export default updatePet;