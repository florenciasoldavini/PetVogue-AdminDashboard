import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../../components/Header";
import updateProduct from "../../../redux/actions/products/updateProduct";
import PhotoUpload from "../../../components/photoUpload";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const UpdateProduct = () => {
  const dispatch = useDispatch();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const currentProduct = useSelector(
    (state) => state.products.productDetail.rows[0]
  );
  const currentProductID = useSelector(
    (state) => state.products.productDetail.rows[0].productID
  );
  console.log("current product", currentProduct);

  const [photo, setPhoto] = useState(currentProduct.image || "");

  const [formValues, setFormValues] = useState({
    name: currentProduct.name || "",
    brand: currentProduct.brand || "",
    description: currentProduct.description || "",
    type: currentProduct.type || "",
    price: currentProduct.price || "",
    image: currentProduct.image || "",  
    stock: currentProduct.stock || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleFormSubmit = (formValues) => {
    formValues.price = parseInt(formValues.price, 10);
    formValues.stock = parseInt(formValues.stock, 10);
    formValues.image = photo;
  
    dispatch(updateProduct(currentProductID, formValues));
  };

  return (
    <Box m="20px">
      <Header title="MODIFICAR PRODUCTO" />

      <Formik onSubmit={handleFormSubmit} initialValues={formValues}>
        {({ values, errors, touched, handleBlur, handleSubmit }) => (
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
                value={formValues.name}
                name="name"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 2" }}
              ></TextField>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Marca"
                onBlur={handleBlur}
                onChange={handleChange}
                value={formValues.brand}
                name="brand"
                error={!!touched.brand && !!errors.brand}
                helperText={touched.brand && errors.brand}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Descripcion"
                onBlur={handleBlur}
                onChange={handleChange}
                value={formValues.description}
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
                value={formValues.type}
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
                value={formValues.price}
                name="price"
                error={!!touched.price && !!errors.price}
                helperText={touched.price && errors.price}
                sx={{ gridColumn: "span 4" }}
              />
              <PhotoUpload photo={photo} setPhoto={setPhoto} />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Stock"
                onBlur={handleBlur}
                onChange={handleChange}
                value={formValues.stock}
                name="stock"
                error={!!touched.stock && !!errors.stock}
                helperText={touched.stock && errors.stock}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Actualizar
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

// const checkoutSchema = yup.object().shape({
//   firstName: yup.string().required("required"),
//   lastName: yup.string().required("required"),
//   email: yup.string().email("invalid email").required("required"),
//   contact: yup
//     .string()
//     .matches(phoneRegExp, "Phone number is not valid")
//     .required("required"),
//   address1: yup.string().required("required"),
//   address2: yup.string().required("required"),
// });
const initialValues = {
  name: "",
  description: "",
  type: "",
  price: "",
  image: "",
  stock: "",
  brand: "",
};

export default UpdateProduct;
