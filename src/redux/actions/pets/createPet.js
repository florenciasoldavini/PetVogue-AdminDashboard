import axios from "axios";

const createPet = () => {
    const endpoint = "http://localhost:3001/pets/post/"

    return async () => {
        try {
            await axios.post(endpoint);

        } catch (error) {
            console.log(error);
        }
    };
};

export default createPet;