import { Box, Button, TextField } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Formik } from "formik";
import * as yup from "yup";
import Header from "../../../components/Header";

import { useDispatch } from 'react-redux';
import createUser from "../../../redux/actions/users/createUser"


const CreateUser = () => {
  const dispatch = useDispatch();

  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
    dispatch(createUser(values));
  };

  return (
    <Box m="20px">
      <Header title="CREAR NUEVO USUARIO" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Foto"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.photo}
                name="photo"
                error={!!touched.photo && !!errors.photo}
                helperText={touched.photo && errors.photo}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Nombre"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Apellido"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contraseña"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={!!touched.password && !!errors.password}
                helperText={touched.password && errors.password}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Dirección"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.adress}
                name="adress"
                error={!!touched.adress && !!errors.adress}
                helperText={touched.adress && errors.adress}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Celular"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="phone"
                error={!!touched.phone && !!errors.phone}
                helperText={touched.phone && errors.phone}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Fecha de nacimiento"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.birth}
                name="birth"
                error={!!touched.birth && !!errors.birth}
                helperText={touched.birth && errors.birth}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="DNI"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.dni}
                name="dni"
                error={!!touched.dni && !!errors.dni}
                helperText={touched.dni && errors.dni}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Role"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.systemRole}
                name="systemRole"
                error={!!touched.systemRole && !!errors.systemRole}
                helperText={touched.systemRole && errors.systemRole}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Estado"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.status}
                name="status"
                error={!!touched.status && !!errors.status}
                helperText={touched.status && errors.status}
                sx={{ gridColumn: "span 2" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Crear
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("*Este campo es obligatorio"),
  lastName: yup.string().required("*Este campo es obligatorio"),
  email: yup.string().email("invalid email").required("Este campo es obligatorio"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  password: yup.string().required("*Este campo es obligatorio"),
  systemRole: yup.string().required("*Este campo es obligatorio"),
  phone: yup.string().required("*Este campo es obligatorio"),
  photo: yup.string().required("*Este campo es obligatorio"),
  adress: yup.string().required("*Este campo es obligatorio"),
  birth: yup.string().required("*Este campo es obligatorio"),
  dni: yup.string().required("*Este campo es obligatorio"),
  status: yup.string().required("*Este campo es obligatorio"),
});

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  systemRole: "",
  phone: "",
  photo: "",
  adress: "",
  birth: "",
  dni: "",
  status: "",
};

export default CreateUser;
