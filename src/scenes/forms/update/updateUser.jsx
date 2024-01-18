import { Box, Button, TextField, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import updateUser from "../../../redux/actions/users/updateUser";
import PhotoUpload from "../../../components/photoUpload";

const UpdateUser = ({ closeDialog }) => {
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.users.userDetail.rows[0]);
  //const users = useSelector((state)=> state.users[0].user)

  console.log(currentUser, "currentUser💚");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [photo, setPhoto] = useState("");
  //const [birth, setBirth] = useState('');
  const [dni, setDni] = useState("");
  const [systemRole, setSystemRole] = useState("");

  useEffect(() => {
    if (currentUser) {
      setFirstName(currentUser.firstName || "");
      setLastName(currentUser.lastName || "");
      setPhone(currentUser.phone || "");
      setAddress(currentUser.address || "");
      setPhoto(currentUser.photo || "");
      //setBirth(currentUser.birth || '');
      setDni(currentUser.dni || "");
      setSystemRole(currentUser.systemRole || "");
    }
  }, [currentUser]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Perro");
    const userData = {
      firstName,
      lastName,
      phone,
      address,
      photo,
      dni,
      systemRole,
    };
    dispatch(updateUser(currentUser.userID, userData)).catch((error) => {
      console.error("Failed to update user: ", error);
    });
    closeDialog();
  };

  const handleConfirmEdit = () => {
    console.log("Gato");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          maxWidth: 400,
          margin: "auto",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            maxWidth: 400,
            margin: "auto",
          }}
        >
          Editar la informacion de {currentUser.firstName}
        </Typography>
        <PhotoUpload photo={photo} setPhoto={setPhoto} />
        <TextField
          label="Nombre"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          label="Apellido"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <TextField
          label="Telefono"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <TextField
          label="Direccion"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <TextField
          label="Dni"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
        />

        <TextField
          label="Rol del sistema"
          value={systemRole}
          onChange={(e) => setDni(e.target.value)}
        />
        <Button variant="contained" color="primary" type="submit">
          Guardar cambios🐾
        </Button>
      </Box>
    </form>
  );
};

export default UpdateUser;
