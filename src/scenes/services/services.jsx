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
import deleteService from "../../redux/actions/services/deleteService";
import getServiceById from "../../redux/actions/services/getServiceById";

const Services = () => {
  const services = useSelector(state => state.services.allServices);
  const dispatch = useDispatch();


  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  console.log(services);


  const onDelete = (e, params) => {
    dispatch(deleteService(params.serviceID));
  };

  const onEdit = (e, params) => {
    dispatch(getServiceById(params.serviceID));
  };

  const columns = [
    {
      field: "serviceID",
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
      field: "category",
      headerName: "Categoría",
      flex: 1,
    },
    {
      field: "price",
      headerName: "Precio",
      flex: 1,
    },
    {
      field: "image",
      headerName: "icono",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Estado",
      flex: 1,
    },
    {
      field: "animalType",
      headerName: "Tipo de mascota",
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
          onClick={(e) => onEdit(e, params.row)} component={Link} to="/services/form/update" 
        >
          <EditIcon/>
        </IconButton>
      );
    } }
  ];

  return (
    <Box m="20px">
      <Header
        title="SERVICIOS"
      />
      <Box display="flex" justifyContent="end" mt="20px">
        <Button component={Link} to="/services/form/create" color="secondary" variant="contained">
          Crear nuevo servicio
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
          getRowId={(row) => row.serviceID}
          rows={services.rows}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Services;
