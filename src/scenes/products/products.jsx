import { Box, Typography, Button, IconButton } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useTheme } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import RestoreIcon from "@mui/icons-material/Restore";
import EditIcon from "@mui/icons-material/Edit";
import toast from "react-hot-toast";

import { tokens } from "../../theme";
import Header from "../../components/Header";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import getAllProducts from "../../redux/actions/products/getAllProducts";
import deleteProduct from "../../redux/actions/products/deleteProduct";
import restoreProduct from "../../redux/actions/products/restoreProduct";
import getProductById from "../../redux/actions/products/getProductById";

const Products = () => {
  const products = useSelector((state) => state.products.allProducts);
  const dispatch = useDispatch();

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  console.log(products);

  const onDelete = async (e, params) => {
    const response = await dispatch(deleteProduct(params.productID));
    if (response?.response?.data?.message) {
      toast.error(response.response.data.message);
    } else {
      dispatch(getAllProducts());
      toast.success("Producto bloqueado exitosamente");
    }
  };

  const onRestore = async (e, params) => {
    const response = await dispatch(restoreProduct(params.productID));
    if (response?.response?.data?.message) {
      toast.error(response.response.data.message);
    } else {
      dispatch(getAllProducts());
      toast.success("Producto desbloqueado exitosamente");
    }
  };

  const onEdit = (e, params) => {
    dispatch(getProductById(params.productID));
  };

  const columns = [
    {
      field: "productID",
      headerName: "ID",
      flex: 0.5,
    },
    {
      field: "name",
      headerName: "Nombre",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "description",
      headerName: "Descripción",
      flex: 1,
    },
    {
      field: "type",
      headerName: "Tipo",
      flex: 1,
    },
    {
      field: "price",
      headerName: "Precio",
      flex: 1,
    },
    {
      field: "image",
      headerName: "imagen",
      flex: 1,
    },
    {
      field: "stock",
      headerName: "Stock",
      flex: 1,
    },
    {
      field: "brand",
      headerName: "Marca",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: ({ row: { status } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              status === "enabled"
                ? colors.greenAccent[600]
                : colors.greenAccent[800]
            }
            borderRadius="4px"
          >
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {status}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "delete",
      headerName: "Eliminar",
      width: 50,
      renderCell: (params) => {
        return (
          <IconButton onClick={(e) => onDelete(e, params.row)}>
            <DeleteIcon />
          </IconButton>
        );
      },
    },
    {
      field: "restore",
      headerName: "Restaurar",
      width: 50,
      renderCell: (params) => {
        return (
          <IconButton onClick={(e) => onRestore(e, params.row)}>
            <RestoreIcon />
          </IconButton>
        );
      },
    },
    {
      field: "edit",
      headerName: "Editar",
      width: 50,
      renderCell: (params) => {
        return (
          <IconButton
            onClick={(e) => onEdit(e, params.row)}
            component={Link}
            to="/products/form/update"
          >
            <EditIcon />
          </IconButton>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="PRODUCTOS" />
      <Box display="flex" justifyContent="end" mt="20px">
        <Button
          component={Link}
          to="/products/form/create"
          color="secondary"
          variant="contained"
        >
          Crear nuevo producto
        </Button>
      </Box>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          getRowId={(row) => row.productID}
          rows={products.rows}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Products;
