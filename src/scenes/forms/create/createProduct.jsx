import { Box, Button, TextField } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Formik } from "formik";
import * as yup from "yup";
import Header from "../../../components/Header";

import { useDispatch } from "react-redux";
import createProduct from "../../../redux/actions/products/createProduct";
import PhotoUpload from "../../../components/photoUpload";
import { useState } from "react";

const CreateProduct = () => {
  const dispatch = useDispatch();

  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [photo, setPhoto] = useState(null);
  console.log(photo)

  const handleFormSubmit = (values) => {
    values.price = parseInt(values.price, 10);
    values.stock = parseInt(values.stock, 10);
    values.image = photo;

    console.log(values);
    console.log(values.image);
    dispatch(createProduct(values));
  };

  return (
    <Box m="20px">
      <Header title="CREAR NUEVO PRODUCTO" />

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
                label="Nombre"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                name="name"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Marca"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.brand}
                name="brand"
                error={!!touched.brand && !!errors.brand}
                helperText={touched.brand && errors.brand}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Descripción"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.description}
                name="description"
                error={!!touched.description && !!errors.description}
                helperText={touched.description && errors.description}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Tipo"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.type}
                name="type"
                error={!!touched.type && !!errors.type}
                helperText={touched.type && errors.type}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Precio"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.price}
                name="price"
                error={!!touched.price && !!errors.price}
                helperText={touched.price && errors.price}
                sx={{ gridColumn: "span 4" }}
              />
              {/* <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Imagen"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.image}
                name="image"
                error={!!touched.image && !!errors.image}
                helperText={touched.image && errors.image}
                sx={{ gridColumn: "span 4" }}
              /> */}
              <PhotoUpload
                photo={photo}
                setPhoto={setPhoto}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Stock"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.stock}
                name="stock"
                error={!!touched.stock && !!errors.stock}
                helperText={touched.stock && errors.stock}
                sx={{ gridColumn: "span 4" }}
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
  name: yup.string().required("*Este campo es obligatorio"),
  description: yup.string().required("*Este campo es obligatorio"),
  type: yup.string().required("*Este campo es obligatorio"),
  price: yup.string().required("*Este campo es obligatorio"),
  stock: yup.string().required("*Este campo es obligatorio"),
  brand: yup.string().required("*Este campo es obligatorio"),
});
const initialValues = {
  name: "",
  description: "",
  type: "",
  price: "",
  image: "",
  stock: "",
  brand: "",
};

export default CreateProduct;
