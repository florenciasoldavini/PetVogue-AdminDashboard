import axios from "axios";

const deletePet = (id) => {
    const endpoint = "https://petvogue.onrender.com/pets/delete/" + id

    return async () => {
        try {
            await axios.delete(endpoint);

        } catch (error) {
            console.log(error);
        }
    };
};

export default deletePet;