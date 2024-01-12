import axios from "axios";

const createPet = () => {
    const endpoint = "https://petvogue.onrender.com/pets/post/"

    return async () => {
        try {
            await axios.post(endpoint);

        } catch (error) {
            console.log(error);
        }
    };
};

export default createPet;