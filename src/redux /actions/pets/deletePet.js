import axios from "axios";

const deletePet = () => {
    const endpoint = "http://localhost:3001/pets/delete/"

    return async () => {
        try {
            await axios.delete(endpoint);

        } catch (error) {
            console.log(error);
        }
    };
};

export default deletePet;