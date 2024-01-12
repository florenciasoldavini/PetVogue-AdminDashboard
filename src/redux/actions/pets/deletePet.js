import axios from "axios";

const deletePet = () => {
    const endpoint = "https://petvogue.onrender.com/pets/delete/"

    return async () => {
        try {
            await axios.delete(endpoint);

        } catch (error) {
            console.log(error);
        }
    };
};

export default deletePet;