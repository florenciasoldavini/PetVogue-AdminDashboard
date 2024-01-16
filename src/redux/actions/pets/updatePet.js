import axios from "axios";

const updatePet = (petID, pet) => {
    const endpoint = "https://petvogue.onrender.com/pets/put/" + petID

    return async () => {
        try {
            await axios.put(endpoint, pet);

        } catch (error) {
            console.log(error);
        }
    };
};

export default updatePet;