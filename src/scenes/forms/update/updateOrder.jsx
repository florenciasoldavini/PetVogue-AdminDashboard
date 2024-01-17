import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../../components/Header";

import { useDispatch } from 'react-redux';
import UpdateOrder from "../../../redux/actions/orders/updateOrder"
import updateOrder from "../../../redux/actions/orders/updateOrder";

const UpdateOrder = () => {
  const dispatch = useDispatch();

  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
    dispatch(updateOrder(values));
  };

  return (
    <Box m="20px">
      <Header title="EDITAR ORDEN DE COMPRA" />

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
                label="UserID"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.userID}
                name="userID"
                error={!!touched.userID && !!errors.userID}
                helperText={touched.userID && errors.userID}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="productID"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.productID}
                name="productID"
                error={!!touched.productID && !!errors.productID}
                helperText={touched.productID && errors.productID}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Fecha"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.date}
                name="date"
                error={!!touched.date && !!errors.date}
                helperText={touched.date && errors.date}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Precio por unidad"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.rate}
                name="rate"
                error={!!touched.rate && !!errors.rate}
                helperText={touched.rate && errors.rate}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Cantidad"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.quantity}
                name="quantity"
                error={!!touched.quantity && !!errors.quantity}
                helperText={touched.quantity && errors.quantity}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Monto total"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.amount}
                name="amount"
                error={!!touched.amount && !!errors.amount}
                helperText={touched.amount && errors.amount}
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
                label="Estado"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.status}
                name="status"
                error={!!touched.status && !!errors.status}
                helperText={touched.status && errors.status}
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
  userID: yup.string().required("*Este campo es obligatorio"),
  productID: yup.string().required("*Este campo es obligatorio"),
  date:yup.string().required("*Este campo es obligatorio"),
  rate: yup.string().required("*Este campo es obligatorio"),
  quantity: yup.string().required("*Este campo es obligatorio"),
  amount: yup.string().required("*Este campo es obligatorio"),
  type: yup.string().required("*Este campo es obligatorio"),
  status: yup.string().required("*Este campo es obligatorio")
});

const initialValues = {
  userID: "",
  productID: "",
  date: "",
  rate: "",
  quantity: "",
  amount: "",
  type: "",
  status: "",
};

export default UpdateOrder;
