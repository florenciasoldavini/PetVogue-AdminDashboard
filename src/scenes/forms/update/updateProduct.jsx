import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../../components/Header";
import updateProduct from "../../../redux/actions/products/updateProduct";
import PhotoUpload from "../../../components/photoUpload";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const UpdateProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentProduct = useSelector(
    (state) => state.products.productDetail.rows[0]
  );

  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState(null);
  const [stock, setStock] = useState(null);
  const [image, setImage] = useState("");
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    if (currentProduct) {
      setName(currentProduct.name || "");
      setBrand(currentProduct.brand || "");
      setDescription(currentProduct.description || "");
      setType(currentProduct.type || "");
      setPrice(currentProduct.price || null);
      setStock(currentProduct.stock || null);
      setPhoto(currentProduct.image || "");
    }
  }, [currentProduct]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const productData = {
      name,
      brand,
      description,
      type,
      price,
      stock,
      image: photo
    };
    dispatch(updateProduct(currentProduct.productID, productData)).catch(
      (error) => {
        console.error("Failed to update product: ", error);
      }
    );
    navigate("/products");
    navigate(0);
    toast.success("Producto editado exitosamente!");
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
          Editar la informacion de {currentProduct.name}
        </Typography>
        <PhotoUpload photo={photo} setPhoto={setPhoto} />
        <TextField
          label="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Marca"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
        <TextField
          label="Descripcion"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          label="Tipo"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <TextField
          label="Precio"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <TextField
          label="Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
        <Button variant="contained" color="primary" type="submit">
          Guardar cambios
        </Button>
      </Box>
    </form>
  )
};

export default UpdateProduct;
