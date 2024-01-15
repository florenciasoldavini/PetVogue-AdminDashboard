import { Box, Button, IconButton } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useTheme } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { tokens } from "../../theme";
import Header from "../../components/Header";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import deleteProduct from "../../redux/actions/products/deleteProduct";
import updateProduct from "../../redux/actions/products/updateProduct";


const Products = () => {
  const products = useSelector(state => state.products.allProducts);
  const dispatch = useDispatch();

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  console.log(products);

  const onDelete = () => {
    dispatch(deleteProduct());
  };

  const onEdit = () => {
    dispatch(updateProduct());
  };

  const columns = [
    {
      field: "productID",
      headerName: "ID",
      flex: 0.5
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
      headerName: "Habilitado",
      flex: 1,
    },
    { field: 'delete', headerName: '', width: 50, renderCell: (params) => {
      return (
        <IconButton 
          onClick={(e) => onDelete(e, params.row)}
        >
          <DeleteIcon/>
        </IconButton>
      );
    } },
    { field: 'edit', headerName: '', width: 50, renderCell: (params) => {
      return (
        <IconButton
          onClick={(e) => onEdit(e, params.row)}
        >
          <EditIcon/>
        </IconButton>
      );
    } }
  ];

  return (
    <Box m="20px">
      <Header
        title="PRODUCTOS"
      />
      <Box display="flex" justifyContent="end" mt="20px">
        <Button component={Link} to="/products/form/create" color="secondary" variant="contained">
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
